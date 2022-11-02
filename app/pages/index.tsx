import { h, Component } from "nzxt/h";
import { styled } from "zstyl";
import { Content } from "../components/Content";
import { Header } from "../components/Header";

const CenteredFlex = styled.div`
  display: flex;
  justify-content: center;
`;

const Heading1 = styled.h1`
  text-align: center;
  font-size: 4.2em;
`;

const Heading2 = styled.h2`
  text-align: center;
`;

const Index: Component = () => {
  return (
    <div>
      <Header />
      <Content>
        <CenteredFlex>
          <div>
            <CenteredFlex>
              <img width={480} src="/images/logo_dark.svg" />
            </CenteredFlex>
            <Heading1>SSR framework <br/>for Zheleznaya</Heading1>
            <Heading2>See <a href="/documents">documentation</a></Heading2>
          </div>
        </CenteredFlex>
      </Content>
    </div>
  )
}

export default Index;
