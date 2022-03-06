document.addEventListener('DOMContentLoaded', () => {
const cardArray = [
    {
        name: 'Yoda',
        img: 'images/Yoda0.png',
},
    {
        name: 'Rey',
        img: 'images/Rey2.png',
},
    {
        name: 'Kylo Ren',
        img: 'images/Kylo Ren2.png',
},
    {
        name: 'Chewbacca',
        img: 'images/Chewbacca2.png',
},
    {
        name: 'Obi-wan Kenobi',
        img: 'images/Obi-wan Kenobi2.png',
},
    {
        name: 'Leia',
        img: 'images/Leia2.png',
},
    {
        name: 'Darth Vader',
        img: 'images/Darth Vader2.png',
},
    {
        name: 'Darth Maul',
        img: 'images/Darth Maul2.png',
},
    {
        name: 'Boba Fett',
        img: 'images/Boba Fett2.png',
},
    {
        name: 'stormtrooper',
        img: 'images/stormtrooper2.png',
},
    {
        name: 'General Griveous',
        img: 'images/General Griveous2.png',
},
    {
        name: 'Ahsoka Tano ',
        img: 'images/Ahsoka Tano2.png',
},
    
{
    name: 'Yoda',
    img: 'images/Yoda0.png',
},
{
    name: 'Rey',
    img: 'images/Rey2.png',
},
{
    name: 'Kylo Ren',
    img: 'images/Kylo Ren2.png',
},
{
    name: 'Chewbacca',
    img: 'images/Chewbacca2.png',
},
{
    name: 'Obi-wan Kenobi',
    img: 'images/Obi-wan Kenobi2.png',
},
{
    name: 'Leia',
    img: 'images/Leia2.png',
},
{
    name: 'Darth Vader',
    img: 'images/Darth Vader2.png',
},
{
    name: 'Darth Maul',
    img: 'images/Darth Maul2.png',
},
{
    name: 'Boba Fett',
    img: 'images/Boba Fett2.png',
},
{
    name: 'stormtrooper',
    img: 'images/stormtrooper2.png',
},
{
    name: 'General Griveous',
    img: 'images/General Griveous2.png',
},
{
    name: 'Ahsoka Tano ',
    img: 'images/Ahsoka Tano2.png',
},

]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
let cardsWon = []

//create your board
function createBoard() {
  for (var i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img')
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    grid.appendChild(card)
  }
}

//check for matches
function checkForMatch() {
  const cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]
  
  if(optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute('src', 'images/blank.png')
    cards[optionTwoId].setAttribute('src', 'images/blank.png')
    alert('You have clicked the same image!')
  }
  else if (cardsChosen[0] === cardsChosen[1]) {
    alert('You found a match')
    cards[optionOneId].setAttribute('src', 'images/black.png')
    cards[optionTwoId].setAttribute('src', 'images/black.png')
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    cardsWon.push(cardsChosen)
  } else {
    cards[optionOneId].setAttribute('src', 'images/blank.png')
    cards[optionTwoId].setAttribute('src', 'images/blank.png')
    alert('Sorry, try again')
  }
  cardsChosen = []
  cardsChosenId = []
  resultDisplay.textContent = cardsWon.length
  if  (cardsWon.length === cardArray.length/2) {
    resultDisplay.textContent = 'Congratulations! You found them all!'
  }
}

//flip your card
function flipCard() {
  let cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChosen.length ===2) {
    setTimeout(checkForMatch, 500)
  }
}

createBoard()
})