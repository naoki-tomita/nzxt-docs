import { h, Component } from "nzxt/h";
import { Content } from "../../components/Content";
import { Header } from "../../components/Header";
import { join } from "path"
import { readFileAsync } from "../../FSUtils";

interface Props {
  toc: Array<{ title: string, file: string }>
}

const Documents: Component<Props> = ({ toc }) => {
  return (
    <div>
      <Header />
      <Content>
        <h1>Contents</h1>
        <ul>
          {toc.map(({ title, file }) => <li><a href={`/documents/${file}`}>{title}</a></li>)}
        </ul>
      </Content>
    </div>
  )
}

Documents.getInitialPrpos = async () => {
  const json = await readFileAsync(join(__dirname, "../../docs/", "table-of-contents.json"));
  return { toc: JSON.parse(json) };
}

export default Documents;
