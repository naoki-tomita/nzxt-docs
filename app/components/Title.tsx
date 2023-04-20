import { h, Component } from "zheleznaya";
let title: HTMLTitleElement = globalThis?.document?.querySelector("title")!;

export const Title: Component<{ label: string }> = ({ label }) => {
  if (title) {
    title.innerText = label;
  }
  return <div></div>
}
