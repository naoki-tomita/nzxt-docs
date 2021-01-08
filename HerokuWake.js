const fetch = require("node-fetch");

function main() {
  poll();
}

async function poll() {
  const result = await fetch("https://nzxt-docs.herokuapp.com/");
  console.log("poll", result.ok);
  setTimeout(poll, 20 * 60 * 1000);
}

main();
