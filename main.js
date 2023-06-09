const searchForm = document.getElementsByTagName('form')[0]
searchForm.addEventListener('submit', () => {
    event.preventDefault()
    const name = searchForm[0].value
    pokemonData(name)
})

const pokeDiv = document.querySelector('.poke-div')

const pokemonData = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await response.json()
    console.log(data)
    pokeDiv.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${data.sprites.front_default}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${data.abilities[0].ability.name}</li>
        <li class="list-group-item">${data.abilities[1].ability.name}</li>
    </ul>
    </div>
    `
}