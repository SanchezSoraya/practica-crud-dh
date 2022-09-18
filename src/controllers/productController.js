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
  },
  detail: (req, res) => {
    const data = findAll();
    const platoEncontrado = data.find(function (plato) {
      return plato.id == req.params.id;
    })
    res.render("product-detail", { plato: platoEncontrado });

  }, create: (req, res) => {
    res.render("product-create-form");
  }
}
module.exports = controller;

