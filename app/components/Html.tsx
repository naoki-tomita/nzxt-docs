import { h, Component } from "nzxt/h";

export const Html: Component<{ html: string }> = ({ html }) => {
  return <div ref={el => (el.innerHTML = html)}></div>
}
