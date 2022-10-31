const { create } = require("nzxt");
const { readdir, readFile } = require("fs/promises");

const app = {
  async handle(req, res) {
    console.log("hello world")
    console.log(process.argv0, process.argv, process.env, process.execArgv, process.execPath)
    console.log((await readFile(process.argv[1])).toString("utf-8"))
    console.log((await readFile("/var/runtime/UserFunction.js")).toString("utf-8"))
    console.log(process.cwd());
    console.log(await readdir("./"));
    console.log(await readdir("./pages"));
    const app = await create();
    app.handle(req, res);
  }
}

module.exports = app;