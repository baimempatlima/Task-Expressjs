const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const foodsandDrinks = [
  {
    id: 1,
    name: "cakes",
    image: "https://cdn.pixabay.com/photo/2017/12/14/19/44/cake-3019638_960_720.jpg",
  },
  {
    id: 2,
    name: "To Bake Cakes",
    image: "https://cdn.pixabay.com/photo/2015/09/16/18/29/bake-943127_960_720.jpg",
  },
  {
    id: 3,
    name: "Flat Bread",
    image: "https://cdn.pixabay.com/photo/2017/10/27/21/04/flat-bread-2895518_960_720.jpg",
  },
  {
    id: 4,
    name: "Croissants",
    image: "https://cdn.pixabay.com/photo/2015/01/06/09/12/crescent-590024_960_720.jpg",
  },
  {
    id: 5,
    name: "Bund Loaf Crispy",
    image: "https://cdn.pixabay.com/photo/2012/01/06/10/55/roll-11556_960_720.jpg",
  },
  {
    id: 6,
    name: "Lemon",
    image: "https://cdn.pixabay.com/photo/2016/07/21/11/17/drink-1532300_960_720.jpg",
  },
  {
    id: 7,
    name: "Tee",
    image: "https://cdn.pixabay.com/photo/2016/10/14/18/21/tee-1740871_960_720.jpg",
  },
  {
    id: 8,
    name: "Milk",
    image: "https://cdn.pixabay.com/photo/2017/07/05/15/41/milk-2474993_960_720.jpg",
  },
  {
    id: 9,
    name: "Cofee",
    image: "https://cdn.pixabay.com/photo/2017/03/27/14/18/coffee-2179028_960_720.jpg",
  },
  {
    id: 10,
    name: "Strawberry jus",
    image: "https://cdn.pixabay.com/photo/2013/02/21/19/06/drink-84533_960_720.jpg",
  },
];
app.get("/", (req, res) => {
  res.render("home.ejs", {
    foodsandDrinks: foodsandDrinks,
  });
});

const Breads = [
  {
    id: 1,
    name: "pretzel",
    image: "https://cdn.pixabay.com/photo/2016/07/01/19/43/pretzels-1491789_960_720.jpg",
  },
  {
    id: 2,
    name: "Baguette",
    image: "https://cdn.pixabay.com/photo/2016/05/07/19/21/baguette-1378049_960_720.jpg",
  },
  {
    id: 3,
    name: "Flat Bread",
    image: "https://cdn.pixabay.com/photo/2017/10/27/21/04/flat-bread-2895518_960_720.jpg",
  },
  {
    id: 4,
    name: "Croissants",
    image: "https://cdn.pixabay.com/photo/2015/01/06/09/12/crescent-590024_960_720.jpg",
  },
  {
    id: 5,
    name: "Bund Loaf Crispy",
    image: "https://cdn.pixabay.com/photo/2012/01/06/10/55/roll-11556_960_720.jpg",
  },
];
app.get("/breads", (req, res) => {
  res.render("bread.ejs", {
    Breads: Breads,
  });
});

const Drinks = [
  {
    id: 1,
    name: "Lemon",
    image: "https://cdn.pixabay.com/photo/2016/07/21/11/17/drink-1532300_960_720.jpg",
  },
  {
    id: 2,
    name: "Tee",
    image: "https://cdn.pixabay.com/photo/2016/10/14/18/21/tee-1740871_960_720.jpg",
  },
  {
    id: 3,
    name: "Milk",
    image: "https://cdn.pixabay.com/photo/2017/07/05/15/41/milk-2474993_960_720.jpg",
  },
  {
    id: 4,
    name: "Cofee",
    image: "https://cdn.pixabay.com/photo/2017/03/27/14/18/coffee-2179028_960_720.jpg",
  },
  {
    id: 5,
    name: "Strawberry jus",
    image: "https://cdn.pixabay.com/photo/2013/02/21/19/06/drink-84533_960_720.jpg",
  },
];
app.get("/drinks", (req, res) => {
  res.render("drinks.ejs", {
    Drinks: Drinks,
  });
});
app.listen(process.env.PORT || port, () => {
  console.log("Aplikasi ini running diport:", port);
});
