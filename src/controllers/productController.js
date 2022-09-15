const fs = require("fs");
const path = require("path");

function findAlll() {
  const jsonData = fs.readFileSync(path.join(__dirname, "../data/products.json"));
  const data = JSON.parse(jsonData);
  return data;
}

const controller = {
  list: (req, res) => {
    const data = findAlll()

    res.render("menu-products", { products: data })
  }
}
module.exports = controller;

