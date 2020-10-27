const cardsArray = [
  { name: "delfin", img: "./img/delfin.svg" },
  { name: "delfin", img: "./img/delfin.svg" },
  { name: "gwiazda", img: "./img/gwiazda.svg" },
  { name: "gwiazda", img: "./img/gwiazda.svg" },
  { name: "konik", img: "./img/konik.svg" },
  { name: "konik", img: "./img/konik.svg" },
  { name: "krab", img: "./img/krab.svg" },
  { name: "krab", img: "./img/krab.svg" },
  { name: "kreweta", img: "./img/kreweta.svg" },
  { name: "kreweta", img: "./img/kreweta.svg" },
  { name: "muszla", img: "./img/muszla.svg" },
  { name: "muszla", img: "./img/muszla.svg" },
  { name: "osmiornica", img: "./img/osmiornica.svg" },
  { name: "osmiornica", img: "./img/osmiornica.svg" },
  { name: "plaszcz", img: "./img/plaszcz.svg" },
  { name: "plaszcz", img: "./img/plaszcz.svg" },
  { name: "rekin", img: "./img/rekin.svg" },
  { name: "rekin", img: "./img/rekin.svg" },
  { name: "ryba", img: "./img/ryba.svg" },
  { name: "ryba", img: "./img/ryba.svg" },
  { name: "skalar", img: "./img/skalar.svg" },
  { name: "skalar", img: "./img/skalar.svg" },
  { name: "zolw", img: "./img/zolw.svg" },
  { name: "zolw", img: "./img/zolw.svg" },
];

// cardsArray.sort(() => 0.5 - Math.random());

let choosenCards = [];
let choosenCardsId = [];
let cardsWon = [];

const grid = document.querySelector(".grid");
const score = document.querySelector("#score");

cardsArray.forEach((card, index) => {
  let img = document.createElement("img");
  img.setAttribute("src", "./img/gili.svg");
  img.setAttribute("data-id", index);
  img.addEventListener("click", flipcard);
  grid.appendChild(img);
});

// check

function check() {
  let cards = document.querySelectorAll("img");
  let firstId = choosenCardsId[0];
  let secondId = choosenCardsId[1];

  if (choosenCards[0] === choosenCards[1]) {
    alert("ok");
    cards[firstId].setAttribute("src", "./img/white.svg");
    cards[secondId].setAttribute("src", "./img/white.svg");

    cardsWon.push(choosenCards);
  } else {
    alert("nie tym razem");
    cards[firstId].setAttribute("src", "./img/gili.svg");
    cards[secondId].setAttribute("src", "./img/gili.svg");
  }

  choosenCards = [];
  choosenCardsId = [];

  score.textContent = cardsWon.length;
  if (cardsWon.length === cardsArray.length / 2) {
    alert("wygrales");
  }
}

// flip

function flipcard() {
  let id = this.getAttribute("data-id");
  this.setAttribute("src", cardsArray[id].img);

  choosenCards.push(cardsArray[id].name);
  choosenCardsId.push(id);

  if (choosenCards.length === 2) {
    setTimeout(check, 500);
  }
}
