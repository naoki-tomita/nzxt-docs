import { h, Component } from "zheleznaya";
import { isDarkMode } from "../Utils";

export const Header: Component = () => {
  return (
    <header>
      <h1 style={{ fontSize: "3.25em" }}><a style={{ textDecoration: "none", color: "var(--nc-tx-1)" }} href="/">nzxt documentation</a></h1>
    </header>
  )
}
