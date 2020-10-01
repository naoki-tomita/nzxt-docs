import { h, Component } from "zheleznaya";

export const Center: Component = (_, children) => {
  return <div style={{ display: "flex", justifyContent: "center" }}>{children}</div>
}
