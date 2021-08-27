import { h, Component } from "nzxt/h";
import { Content } from "../../components/Content";
import { Header } from "../../components/Header";
import { join } from "path"
import { readFileAsync } from "../../FSUtils";

interface Props {
  toc: Content[];
}

interface Content {
  title: string;
  file?: string;
  contents?: Content[];
}

const ContentList: Component<{ toc: Content[] }> = ({ toc }) => {
  return (
    <ul>
      {toc.map(({ title, file, contents }) =>
        file
          ? <li><a href={`/documents/${file}`}>{title}</a></li>
          : <li>
              {title}
              <ContentList toc={contents!} />
            </li>
      )}
    </ul>
  );
}

const Documents: Component<Props> = ({ toc }) => {
  return (
    <div>
      <Header />
      <Content>
        <h1>Contents</h1>
        <ContentList toc={toc} />
      </Content>
    </div>
  )
}

Documents.getInitialPrpos = async () => {
  const json = await readFileAsync(join(__dirname, "../../docs/", "table-of-contents.json"));
  return { toc: JSON.parse(json) };
}

export default Documents;
