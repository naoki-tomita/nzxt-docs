const { command } = require("nzxt");

const app = {
  async main(req, res) {
    const nzxt = await command("serve");
    nzxt.onRequest(req, res);
  }
}
module.exports = app;
