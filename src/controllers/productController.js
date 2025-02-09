const fs = require("fs");
const { reset } = require("nodemon");
const path = require("path");

function findAlll() {
  const jsonData = fs.readFileSync(path.join(__dirname, "../data/products.json"));
  const data = JSON.parse(jsonData);
  return data;
}

function writeFile(data) {
  const dataString = JSON.stringify(data, null, 4);
  fs.writeFileSync(path.join(__dirname, "../data/products.json"), dataString);
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
  },
  store: (req, res) => {
    const data = findAlll()

    const newProduct = {
      id: data.length + 3,
      name: req.body.name,
      price: Number(req.body.price),
      description: req.body.description

    }

    data.push(newProduct);
    writeFile(data);

    res.redirect("/products/create");

  },
  edit: (req, res) => {
    const data = findAlll();
    const platoEncontrado = data.find(function (plato) {
      return plato.id == req.params.id;
    })
    res.render("product-update-form", { plato: platoEncontrado });
  },
  update: (req, res) => {
    const data = findAlll()
    const platoEncontrado = data.find(function (plato) {
      return plato.id == req.params.id;
    })
    platoEncontrado.name = req.body.name;
    platoEncontrado.price = req.body.price;
    platoEncontrado.description = req.body.description;

    writeFile(data);

    res.redirect("/products/list");
  }
}
module.exports = controller;

