import { h, Component } from "nzxt/h";
import { readFile } from "fs";
import marked from "marked";
import { Header } from "../../components/Header";
import { Content } from "../../components/Content";
import { Html } from "../../components/Html";

function readFileAsync(path: string) {
  return new Promise<string>(ok => readFile(path, (_, d) => ok(d.toString())));
}

function markedAsync(md: string) {
  return new Promise<string>(ok => marked(md, (_, d) => ok(d)));
}

const Document: Component<{html: string}> = ({ html }) => {
  return (
    <div>
      <Header />
      <Content>
        <Html html={html}/>
      </Content>
    </div>
  );
}

Document.getInitialPrpos = async ({ params }) => {
  return {
    html: await readFileAsync(`./docs/${params.id}.md`).then(markedAsync),
  }
}

export default Document;
