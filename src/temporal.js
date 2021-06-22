const container = document.querySelector("#container");
const searchBar = document.querySelector("#searchBar");

// searchBar.addEventListener( 'keyup', (e) => {
//   const target = e.target.value.toLowerCase()

//   const filteredCryptos = cryptoList.filter(crypto => {
//     return crypto.name.toLowerCase().includes(target)
//   })

//   displayCryptos(filteredCryptos)
// })

const searchCryptos = (cryptos) => {
  searchBar.addEventListener( 'keyup', (e) => {
    const target = e.target.value.toLowerCase()
    const filteredCryptos = cryptos.data.filter(crypto => {
      return crypto.name.toLowerCase().includes(target)
    })
    displayedFromSearchCryptos(filteredCryptos)
  })

}
async function getCryptos() {
  try {
    const response = await fetch('https://api.coinlore.net/api/tickers/')
    let cryptoList = await response.json()
    
    searchCryptos(cryptoList)
    displayCryptos(cryptoList)
  } catch(err) {
    console.error(err)
  }
}

const displayedFromSearchCryptos = (cryptos) => {
  const htmlString = cryptos
    .map((crypto) => {
      return `
        <div class="coinBox">
          <div class="textBox">
            <h2 style="margin-right: 5px">${crypto.rank}</h2>
            <h2>${crypto.name}</h2>
          </div>
          <p>${crypto.price_usd}</p>
        </div>
      `
    })
    .join('')
    container.innerHTML = htmlString;
}


const displayCryptos = (cryptos) => {
  const htmlString = cryptos.data
    .map((crypto) => {
      return `
        <div class="coinBox">
          <div class="textBox">
            <h2 style="margin-right: 5px">${crypto.rank}</h2>
            <h2>${crypto.name}</h2>
          </div>
          <p>${crypto.price_usd}</p>
        </div>
      `
    })
    .join('')
    container.innerHTML = htmlString;
}

getCryptos()