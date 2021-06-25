const container = document.querySelector("#container");
const searchBar = document.querySelector("#searchBar");
const button1 = document.querySelector("#pagButton1");
const button2 = document.querySelector("#pagButton2");
const button3 = document.querySelector("#pagButton3");
const button4 = document.querySelector("#pagButton4");
const button5 = document.querySelector("#pagButton5");
const button6 = document.querySelector("#pagButton6");
const button7 = document.querySelector("#pagButton7");
const button8 = document.querySelector("#pagButton8");
const button9 = document.querySelector("#pagButton9");
const button10 = document.querySelector("#pagButton10");

const paginateCryptos = (cryptos) => {
  const separatedCoins1 = cryptos.data.slice(0, 10);
  const separatedCoins2 = cryptos.data.slice(10, 20);
  const separatedCoins3 = cryptos.data.slice(20, 30);
  const separatedCoins4 = cryptos.data.slice(30, 40);
  const separatedCoins5 = cryptos.data.slice(40, 50);
  const separatedCoins6 = cryptos.data.slice(50, 60);
  const separatedCoins7 = cryptos.data.slice(60, 70);
  const separatedCoins8 = cryptos.data.slice(70, 80);
  const separatedCoins9 = cryptos.data.slice(80, 90);
  const separatedCoins10 = cryptos.data.slice(90, 100);
  displayedFromSearchCryptos(separatedCoins1);

  button1.onclick = () => {
    displayedFromSearchCryptos(separatedCoins1);
  };
  button2.onclick = () => {
    displayedFromSearchCryptos(separatedCoins2);
  };
  button3.onclick = () => {
    displayedFromSearchCryptos(separatedCoins3);
  };
  button4.onclick = () => {
    displayedFromSearchCryptos(separatedCoins4);
  };
  button5.onclick = () => {
    displayedFromSearchCryptos(separatedCoins5);
  };
  button6.onclick = () => {
    displayedFromSearchCryptos(separatedCoins6);
  };
  button7.onclick = () => {
    displayedFromSearchCryptos(separatedCoins7);
  };
  button8.onclick = () => {
    displayedFromSearchCryptos(separatedCoins8);
  };
  button9.onclick = () => {
    displayedFromSearchCryptos(separatedCoins9);
  };
  button10.onclick = () => {
    displayedFromSearchCryptos(separatedCoins10);
  };

  // displayedFromSearchCryptos(separatedCoins2);
};

const searchCryptos = (cryptos) => {
  searchBar.addEventListener("keyup", (e) => {
    const target = e.target.value.toLowerCase();
    const filteredCryptos = cryptos.data.filter((crypto) => {
      return crypto.name.toLowerCase().includes(target);
    });
    if (target === "") {
      displayedFromSearchCryptos(separatedCoins1);
    }
    displayedFromSearchCryptos(filteredCryptos);
  });
};

async function getCryptos() {
  try {
    const response = await fetch("https://api.coinlore.net/api/tickers/");
    let cryptoList = await response.json();

    paginateCryptos(cryptoList);
    searchCryptos(cryptoList);
  } catch (err) {
    console.error(err);
  }
}

const displayedFromSearchCryptos = (cryptos) => {
  const htmlString = cryptos
    .map((crypto) => {
      return `
        <div class="coinBox">
          <div class="textBox">
            <h2 style="margin-right: 5px">${crypto.rank}.</h2>
            <h2>${crypto.name}</h2>
          </div>
          <p>${crypto.price_usd}</p>
        </div>
      `;
    })
    .join("");
  container.innerHTML = htmlString;
};

// const displayCryptos = (cryptos) => {
//   const htmlString = cryptos.data
//     .map((crypto) => {
//       return `
//         <div class="coinBox">
//           <div class="textBox">
//             <h2 style="margin-right: 5px">${crypto.rank}.</h2>
//             <h2>${crypto.name}</h2>
//           </div>
//           <p>${crypto.price_usd}</p>
//         </div>
//       `;
//     })
//     .join("");
//   container.innerHTML = htmlString;
// };

getCryptos();
