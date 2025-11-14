const { create } = require("nzxt");
// const { register } = require("esbuild-register/dist/node");
const { readdir, readFile } = require("fs/promises");

// register({ tsconfigRaw: "./tsconfig.json" });

module.exports = async (req, res) => {
  console.log("hello world")
  console.log(process.argv0, process.argv, process.env, process.execArgv, process.execPath)
  console.log((await readFile(process.argv[1])).toString("utf-8"))
  console.log(process.cwd());
  console.log(await readdir("./"));
  console.log(await readdir("./pages"));
  const app = await create();
  app.handle(req, res);
  res.status(200).json({ message: "Hello from Vercel Pure Handler!" });
};
