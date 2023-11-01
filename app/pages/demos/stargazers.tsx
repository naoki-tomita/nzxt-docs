import { Component, h } from "nzxt/h";

const Counter: Component<{ stargazersCount: number }> = ({ stargazersCount }) => {
  return (
    <div>
      <h1>nzxt stargazers count</h1>
      <p>{stargazersCount}</p>
    </div>
  );
}

Counter.getInitialPrpos = async () => {
  const repo = await fetch("https://api.github.com/repos/naoki-tomita/nzxt")
    .then(it => it.json())
  return { stargazersCount: repo.stargazers_count };
}

export default Counter
