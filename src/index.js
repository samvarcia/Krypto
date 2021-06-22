const API = "https://api.coinlore.net/api/tickers/";
const container = document.querySelector("#container");
const searchBar = document.querySelector("#searchBar");

// EventListener para el searchBar

// API

window
  .fetch(API)
  // Procesar respuesta y convertirla en JSON
  .then((respuesta) => respuesta.json())
  // JSON -> DATA -> AL BROWSER
  .then((responseJson) => {
    const allItems = [];
    responseJson.data.forEach((item) => {
      const ranks = document.createElement("h2");
      ranks.style.marginRight = "5px";
      ranks.textContent = item.rank;

      const title = document.createElement("h2");
      title.textContent = item.name;

      const price = document.createElement("p");
      price.textContent = item.price_usd;

      const textBox = document.createElement("div");
      textBox.className = "textBox";
      textBox.append(ranks, title);

      const coinBox = document.createElement("div");
      coinBox.className = "coinBox";
      coinBox.append(textBox, price);

      container.appendChild(coinBox);
    });
  });

searchBar.addEventListener("keyup", (e) => {
  console.log(e.target.value);
  if (e.target.value === item.name) {
    console.log("GOD");
  }
});
