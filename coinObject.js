const coin = {
  state: 0,

  flip: function () {
      this.state = Math.round(Math.random())
  },

  toString: function () {
    return !this.state?"Heads":"Tails"
  },

  toHTML: function () {
    const image = document.createElement("img");
    if(!this.state){
      image.src = "./imagens/cara.jpeg"
      image.alt = "Heads"
    } else {
      image.src = "./imagens/coroa.png"
      image.alt = "Tails"
    }
    return image;
  },
};


function display20Flips() {
  const results = [];
  for(let i = 1; i<=20; i++){
    coin.flip()
    results.push(coin.toString())
  }
  const divFlips = document.createElement('div')
  const titleFlips = document.createElement('h2')
  const flips = document.createElement('span')
  titleFlips.innerText = '20 flips'
  divFlips.appendChild(titleFlips)
  divFlips.appendChild(flips)
  document.body.appendChild(divFlips)
  flips.innerText= JSON.stringify(results)
  return results
}

display20Flips()

function display20Images() {
  const results = [];
  for(let i = 1; i<=20; i++){
    coin.flip()
    results.push(coin.toHTML())
  }
  const divImages = document.createElement('div')
  const titleImages = document.createElement('h2')
  divImages.id = 'images'
  titleImages.innerText = '20 Images'
  divImages.appendChild(titleImages)
  document.body.appendChild(divImages)
  results.forEach(item=>divImages.appendChild(item))
  return results
}

display20Images()