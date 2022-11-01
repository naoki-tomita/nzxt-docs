import { h, Component } from "nzxt/h";
import marked from "marked";
import { Header } from "../../components/Header";
import { Content } from "../../components/Content";
import { Html } from "../../components/Html";
import { readFileAsync } from "../../FSUtils";

function markedAsync(md: string) {
  return new Promise<string>((ok, ng) => marked(md, (e, d) => e ? ng(e) : ok(d)));
}

interface Content {
  title: string;
  file?: string;
  contents?: Content[];
}

const ContentList: Component<{ contents: Content[], current: Content }> = ({ contents, current }) => {
  return (
    <ul style={{ paddingLeft: "0", listStyle: "none", position: "sticky", top: "2rem" }}>
      {contents.map(c =>
        c.file
          ? current.file === c.file
            ? <li><b><a style={{ textDecoration: "none" }} href={`./${c.file}`}>{c.title}</a></b></li>
            : <li><a href={`./${c.file}`}>{c.title}</a></li>
          : <li>
              {c.title}
              <div style={{ paddingLeft: "12px" }}>
                <ContentList contents={c.contents!} current={current} />
              </div>
            </li>
      )}
    </ul>
  );
}

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
        <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
          <div style={{ width: "200px" }}>
            <ContentList contents={contents} current={current} />
          </div>
          <div style={{ width: "720px" }}>
            <Html html={html} />
            <h4>
              {prev ? <a href={`./${prev.file}`}>{"<- prev"}</a> : ""}
              {(prev && next) ? " / " : ""}
              {next ? <a href={`./${next.file}`}>{"next ->"}</a> : ""}
            </h4>
          </div>
        </div>
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
