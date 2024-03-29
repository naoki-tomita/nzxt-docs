import { h, Component } from "nzxt/h";
import { styled } from "zstyl";
import { Content } from "../components/Content";
import { Header } from "../components/Header";
import { Title } from "../components/Title";

const CenteredFlex = styled.div`
  display: flex;
  justify-content: center;
`;

const Heading1 = styled.h1`
  text-align: center;
  font-size: 4.2em;
  border: none;

  @media (max-width: 560px) {
    font-size: 2.5em;
  }
`;

const Heading2 = styled.h2`
  text-align: center;
  border: none;
`;

const Index: Component = () => {
  return (
    <div>
      <Header />
      <Title label="nzxt document" />
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
