import { h, Component } from "nzxt/h";
import { Content } from "../components/Content";
import { Header } from "../components/Header";

const Index: Component = () => {
  return (
    <div>
      <Header />
      <Content>
        <h1><a href="/documents">documentation</a></h1>
      </Content>
    </div>
  )
}

export default Index;
