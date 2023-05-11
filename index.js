const botonMostrarPokemones = document.getElementById("mostrar-pokemones")
const listaDePokemones = document.getElementById("lista-de-pokemones")

async function obtenerPokemones(comienzo, cantidadDePokemonesQueQuieroVer) {
  const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${comienzo}&limit=${cantidadDePokemonesQueQuieroVer}`)
  const datos = await respuesta.json()

  // Devuelvo solo los pokemones
  return datos.results
}

botonMostrarPokemones.addEventListener("click", async () => {
  const pokemones = await obtenerPokemones("0", "70")

  pokemones.forEach((pokemon) => {
    const itemDePokemon = document.createElement("li")
    itemDePokemon.innerText = `${pokemon.name}`

    itemDePokemon.style.textTransform = "capitalize"

    listaDePokemones.appendChild(itemDePokemon)
  })
})