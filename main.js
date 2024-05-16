const colors = [
    {
    fire:"#C72A09",
    ground:"#78451A",
    fly:"#9AD7DF",
    poison:"#7849C2",
    bug:"#52DE1D",
    normal:"#CADCDE",
    electric:"#FFFF00",
    fairy:"#FAA8FA",
    grass:"#1F6D11",
    fighting:"#7A766B",
    psychic:"#FB9808",
    rock:"#929292",
    ghost:"#C797E4",
    ice:"#342F8A",
    dragon:"#F36D81",
    water:"#05DEFC"
    }
]

const typeColor = colors[0]

const card = document.getElementById('card')
const containerCards = document.getElementById('container--cards-pokemon');
const findNumber = document.getElementById('find--number')
const buscador = document.getElementById('buscador')
const numPokemos = 150;






const pokemosId = async () => {
    
    for (let i = 1; i <= numPokemos; i++) {
       
            await getPokemon(i)
        }
    
}


const getPokemon = async (i) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    const res =  await fetch (url);
    const data = await res.json()
    createCardPokemon(data)
}


const createCardPokemon = (pokemon) =>{
    const pokemonCard = document.createElement('article') 
    pokemonCard.classList.add('container--card')
    
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id.toString().padStart(3, '0');
    const typeOne = pokemon.types[0].type.name
    const typeTwo = pokemon.types[1] ? pokemon.types[1].type.name : typeOne;

   
    const colorFind = typeColor[typeOne]
    pokemonCard.style.backgroundColor = colorFind

 






const innerArticle = `
    <article id="card" class="card--article">
        <img class="img--container"
         src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" 
            alt="pokemon">
        <p>${id}</p>
        <h4>${name}</h4>
        <p>Type: ${typeOne}</p>
        <p>Subtype: ${typeTwo}</p>
    </article>
`

    pokemonCard.innerHTML = innerArticle

    containerCards.appendChild(pokemonCard)

}
pokemosId()

