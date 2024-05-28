const { readFile } = require("fs");
const { join } = require("path");

async function getRegionsList() {
  let list;
  readFile(join(__dirname, "../", "regions.json"), "utf-8", (err, data) => {
    if (err) throw err;
    list = data;
  });
  return data;
}

module.exports = getRegionsList;
