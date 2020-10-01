import { h, Component } from "nzxt/h";
import { Content } from "../components/Content";
import { Header } from "../components/Header";

const Error: Component = () => {
  return (
    <div>
      <Header />
      <Content>
        <h2>Unexpected error has occured.</h2>
      </Content>
    </div>
  )
}

export default Error;
