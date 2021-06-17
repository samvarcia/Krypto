const API = "https://api.coinlore.net/api/tickers/";
const container = document.querySelector("#container");

// API

window
  .fetch(API)
  // Procesar respuesta y convertirla en JSON
  .then((respuesta) => respuesta.json())
  // JSON -> DATA -> AL BROWSER
  .then((responseJson) => {
    const allItems = [];
    responseJson.data.forEach((item) => {
      const title = document.createElement("h2");
      title.textContent = item.name;
      container.appendChild(title);

      const price = document.createElement("p");
      price.textContent = item.price_usd;
      container.appendChild(price);
    });
  });
