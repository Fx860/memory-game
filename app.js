const cardArray = [
    {
        name: 'Yoda',
        img: 'images/yoda.png',
},
    {
        name: 'Rey',
        img: 'images/Rey.png',
},
    {
        name: 'Kylo Ren',
        img: 'images/Kylo Ren.png',
},
    {
        name: 'Chewbacca',
        img: 'images/Chewbacca.png',
},
    {
        name: 'Obi-wan Kenobi',
        img: 'images/Obi-wan Kenobi.png',
},
    {
        name: 'Leia',
        img: 'images/Leia.png',
},
    {
        name: 'Darth Vader',
        img: 'images/Darth Vader.png',
},
    {
        name: 'Darth Maul',
        img: 'images/Darth Maul.png',
},
    {
        name: 'Boba Fett',
        img: 'images/Boba Fett.png',
},
    {
        name: 'stormtrooper',
        img: 'images/stormtrooper.png',
},
    {
        name: 'General Griveous',
        img: 'images/General Griveous.png',
},
    {
        name: 'Ahsoka Tano ',
        img: 'images/Ahsoka Tano .png',
},
    
{
    name: 'Yoda',
    img: 'images/yoda.png',
},
{
    name: 'Rey',
    img: 'images/Rey.png',
},
{
    name: 'Kylo Ren',
    img: 'images/Kylo Ren.png',
},
{
    name: 'Chewbacca',
    img: 'images/Chewbacca.png',
},
{
    name: 'Obi-wan Kenobi',
    img: 'images/Obi-wan Kenobi.png',
},
{
    name: 'Leia',
    img: 'images/Leia.png',
},
{
    name: 'Darth Vader',
    img: 'images/Darth Vader.png',
},
{
    name: 'Darth Maul',
    img: 'images/Darth Maul.png',
},
{
    name: 'Boba Fett',
    img: 'images/Boba Fett.png',
},
{
    name: 'stormtrooper',
    img: 'images/stormtrooper.png',
},
{
    name: 'General Griveous',
    img: 'images/General Griveous.png',
},
{
    name: 'Ahsoka Tano ',
    img: 'images/Ahsoka Tano .png',
},

]

cardArray.sort( () => 0.5 - Math.random()  )

const gridDisplay = document.querySelector('#grid') 
  

//create your board
function crateBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        gridDisplay.appendChild(card)  

        
    }

}
crateBoard()



