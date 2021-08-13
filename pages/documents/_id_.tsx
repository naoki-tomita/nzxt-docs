import { h, Component } from "nzxt/h";
import marked from "marked";
import { Header } from "../../components/Header";
import { Content } from "../../components/Content";
import { Html } from "../../components/Html";
import { readFileAsync } from "../../FSUtils";

function markedAsync(md: string) {
  return new Promise<string>((ok, ng) => marked(md, (e, d) => e ? ng(e) : ok(d)));
}

interface ContentLink { 
  title: string; 
  file: string; 
}

const Document: Component<{ 
  html: string; 
  next: ContentLink; 
  prev: ContentLink;
}> = ({ html, next, prev }) => {
  return (
    <div>
      <Header />
      <Content>
        <Html html={html}/>
        <h4>
          {prev && <a href={`./${prev.file}`}>{"<- prev"}</a>}
          {prev && next && " / "}
          {next && <a href={`./${next.file}`}>{"next ->"}</a>}
        </h4>
      </Content>
    </div>
  );
}

Document.getInitialPrpos = async ({ params }) => {
  const [toc, html]: [Array<{ title: string; file: string }>] = await Promise.all([
    readFileAsync("./docs/table-of-contents.json"),
    readFileAsync(`./docs/${params.id}.md`).then(markedAsync),
  ]);
  const currentIndex = toc.findIndex(it => it.file === params.id);
  const next = toc[currentIndex + 1];
  const prev = toc[currentIndex - 1];
  return { html, prev, next };
}

export default Document;
