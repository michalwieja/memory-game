function startGame() {
  event.preventDefault();

  let choosenCards = [];
  let choosenCardsId = [];
  let cardsWon = [];
  const name = document.querySelector("#name").value;
  const level = document.querySelector("#level").value;
  const match = document.querySelector(".match");
  const fail = document.querySelector(".fail");
  const won = document.querySelector(".won");
  const form = document.querySelector(".form");

  const grid = document.querySelector(".grid");
  const score = document.querySelector("#score");
  const turns = document.querySelector("#turns");
  const endTurns = document.querySelector("#endTurns");

  let turnsNumber = 0;
  const nameValue = document.querySelector("#nameValue");

  form.style.opacity = 0;
  form.style.visibility = "hidden";
  // Displaying the value
  nameValue.textContent = name;

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

  let cardsLevel;
  if (level === "easy") {
    cardsLevel = cardsArray.slice(12);
  } else if (level === "medium") {
    cardsLevel = cardsArray.slice(8);
  } else if (level === "hard") {
    cardsLevel = cardsArray.slice(0);
  }

  console.log(cardsLevel);
  cardsLevel.sort(() => 0.5 - Math.random());
  console.log(cardsLevel);

  cardsLevel.forEach((card, index) => {
    let button = document.createElement("button");

    button.setAttribute("data-id", index);
    button.addEventListener("click", flipcard);
    grid.appendChild(button);
  });

  // check

  function check() {
    let cards = document.querySelectorAll("button");
    let firstId = choosenCardsId[0];
    let secondId = choosenCardsId[1];

    if (choosenCards[0] === choosenCards[1]) {
      match.style.opacity = 1;
      match.style.visibility = "visible";

      setTimeout(function () {
        match.style.opacity = 0;
        match.style.visibility = "hidden";
      }, 1000);

      cards[firstId].style.backgroundImage = `url(./img/white.svg)`;
      cards[secondId].style.backgroundImage = `url(./img/white.svg)`;

      cardsWon.push(choosenCards);
    } else {
      fail.style.opacity = 1;
      fail.style.visibility = "visible";

      setTimeout(function () {
        fail.style.opacity = 0;
        fail.style.visibility = "hidden";
      }, 1000);

      cards[firstId].style.backgroundImage = `url(./img/gili.svg)`;
      cards[secondId].style.backgroundImage = `url(./img/gili.svg)`;
      cards[firstId].disabled = false;
      cards[secondId].disabled = false;
    }

    choosenCards = [];
    choosenCardsId = [];

    score.textContent = cardsWon.length;
    if (cardsWon.length === cardsLevel.length / 2) {
      won.style.opacity = 1;
      won.style.visibility = "visible";
      endTurns.textContent = turnsNumber;
    }
  }

  // flip

  function flipcard() {
    let id = this.getAttribute("data-id");
    this.style.backgroundImage = `url(${cardsLevel[id].img})`;
    this.disabled = true;

    choosenCards.push(cardsLevel[id].name);
    choosenCardsId.push(id);

    if (choosenCards.length === 2) {
      setTimeout(check, 500);
      turnsNumber++;
      turns.textContent = turnsNumber;
    }
  }
}
