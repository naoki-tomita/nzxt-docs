import { h, Component } from "zheleznaya";
import { styled } from "zstyl";

const Heading = styled.h1`
  font-size: 3.25em;

  @media (max-width: 560px) {
    font-size: 2.5em;
  }

  @media (max-width: 450px) {
    font-size: 1.7em;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: var(--nc-tx-1);
`;

export const Header: Component = () => {
  return (
    <header>
      <Heading><Link href="/">nzxt documentation</Link></Heading>
    </header>
  )
}
