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

    // displayCryptos(filteredCryptos)
    console.log(filteredCryptos)
  })
}
async function getCryptos() {
  try {
    const response = await fetch('https://api.coinlore.net/api/tickers/')
    let cryptoList = await response.json()
    // console.log(cryptoList)
    displayCryptos(cryptoList)
    searchCryptos(cryptoList)
  } catch(err) {
    console.error(err)
  }
}


const displayCryptos = (cryptos) => {
  // const htmlString = cryptos.data
  //   .map((crypto) => {
  //     return `
  //       <div>
  //         <h2>${crypto.name}</h2>
  //       </div>
  //     `
  //   })
  //   .join('')
  //   container.innerHTML = htmlString;
  cryptos.data.forEach((item) => {      
      const title = document.createElement("h2");
      title.innerText = item.name 
      container.appendChild(title)
      // console.log(item.name)
  })
}

getCryptos()