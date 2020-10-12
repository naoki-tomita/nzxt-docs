import { h, Component } from "nzxt/h";
import { Content } from "../components/Content";
import { Header } from "../components/Header";

const Error: Component<{ error: Error }> = ({ error }) => {
  return (
    <div>
      <Header />
      <Content>
        <pre>
          <code>{error.stack}</code>
        </pre>
      </Content>
    </div>
  )
}

export default Error;
