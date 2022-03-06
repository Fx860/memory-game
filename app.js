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

cardArray.sort( () => 0.5 - Math.random()  )

const gridDisplay = document.querySelector('#grid') 
const cardChosen = []
  


function crateBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        gridDisplay.appendChild(card)  
        card.addEventListener('click', filpcard )
        
    }

}
crateBoard()
console.log(cardArray)
function filpcard() {
const cardid = this.getAttribute('data-id')
console.log (cardArray[cardid].name)
cardChosen.push(cardArray[cardid].name)  

console.log('clicked', cardid)
console.log(cardChosen)

this.setAttribute('src', cardArray[cardid].img)



}