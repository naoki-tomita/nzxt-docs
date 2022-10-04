import { Component, h } from "nzxt/h";
import { useStore } from "zheleznaya";

const Counter: Component<{ count: number }> = ({ count }) => {
  const state = useStore({ count });
  return (
    <div>
      <h1>{state.count}</h1>
      <button onclick={() => state.count++}>count up</button>
    </div>
  );
}

Counter.getInitialPrpos = async () => {
  return { count: 100 };
}

export default Counter