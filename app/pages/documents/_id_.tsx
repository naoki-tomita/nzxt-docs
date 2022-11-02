import { h, Component } from "nzxt/h";
import marked from "marked";
import { Header } from "../../components/Header";
import { Content } from "../../components/Content";
import { Html } from "../../components/Html";
import { readFileAsync } from "../../FSUtils";
import { styled } from "zstyl";

function markedAsync(md: string) {
  return new Promise<string>((ok, ng) => marked(md, (e, d) => e ? ng(e) : ok(d)));
}

interface Content {
  title: string;
  file?: string;
  contents?: Content[];
}

const List = styled.ul`
  padding-left: 0;
  list-style: none;
  position: sticky;
  top: 2rem;
`;

const Link = styled.a`
  text-decoration: none;
`;

const NestedContents = styled.div`
  padding-left: 12px;
`

const ContentList: Component<{ contents: Content[], current: Content }> = ({ contents, current }) => {
  return (
    <List>
      {contents.map(c =>
        c.file
          ? current.file === c.file
            ? <li><b><Link href={`./${c.file}`}>{c.title}</Link></b></li>
            : <li><a href={`./${c.file}`}>{c.title}</a></li>
          : <li>
              {c.title}
              <NestedContents>
                <ContentList contents={c.contents!} current={current} />
              </NestedContents>
            </li>
      )}
    </List>
  );
}

const CenteredFlex = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;

const TableOfContents = styled.div`
  width: 200px;
`;

const ContentsArea = styled.div`
  width: 720px;
`;

const Document: Component<{
  html: string;
  next?: Content;
  prev?: Content;
  current: Content;
  contents: Content[];
}> = ({ html, next, prev, contents, current }) => {
  return (
    <div>
      <Header />
      <Content>
        <CenteredFlex>
          <TableOfContents>
            <ContentList contents={contents} current={current} />
          </TableOfContents>
          <ContentsArea>
            <Html html={html}/>
            <h4>
              {prev ? <a href={`./${prev.file}`}>{"<- prev"}</a> : ""}
              {(prev && next) ? " / " : ""}
              {next ? <a href={`./${next.file}`}>{"next ->"}</a> : ""}
            </h4>
          </ContentsArea>
        </CenteredFlex>
      </Content>
    </div>
  );
}

Document.getInitialPrpos = async ({ params }) => {
  const [toc, html]: [Content[], string] = await Promise.all([
    readFileAsync("./docs/table-of-contents.json").then(it => JSON.parse(it)),
    readFileAsync(`./docs/${params.id}.md`).then(markedAsync),
  ]);
  const flatToc = toc.map(it => it.contents ? it.contents : it).flat();
  const currentIndex = flatToc.findIndex(it => it.file === params.id);
  const next = flatToc[currentIndex + 1];
  const prev = flatToc[currentIndex - 1];
  const current = flatToc[currentIndex];
  return { html, prev, next, current, contents: toc };
}

export default Document;
