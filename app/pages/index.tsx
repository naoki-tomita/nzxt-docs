import { h, Component } from "nzxt/h";
import { Content } from "../components/Content";
import { Header } from "../components/Header";

const Index: Component = () => {
  return (
    <div>
      <Header />
      <Content>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <div style={{
              display: "flex",
              justifyContent: "center"
            }}>
              <img width={480} src="/images/logo_dark.svg" />
            </div>
            <h1 style={{ textAlign: "center", fontSize: "4.2em" }} >SSR framework <br/>for Zheleznaya</h1>
            <h2 style={{ textAlign: "center" }} >See <a href="/documents">documentation</a></h2>
          </div>
        </div>
      </Content>
    </div>
  )
}

export default Index;
