async function apiCall() {

  try {

    const pokeID = [1, 2, 3, 4, 5, 6, 7, 8, 9, 493]

    const result = document.getElementById("pokeList");
    result.innerHTML = '';
    let pokeList = ''

    const pokemomArray = []

    for (let i of pokeID) {

      let resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)

      const data = await resp.json();

      pokemomArray.push({
        imageP: data.sprites.front_default,
        name: data.name,
        type: data.types[0].type.name,
        baseExperience: data.base_experience,
        height: data.height,
        weight: data.weight
      });
    }


    let pokeIndex = 0
    pokemomArray.forEach(e => {

      pokeIndex = pokemomArray.indexOf(e)

      pokeList += `<div class="cardPokemon">
                    <img src="${e.imageP}" alt="${e.name}">
                    <p>Nome: ${e.name}</p>
                    <p>Tipo: <span id="bgType">${e.type}</span></p>
                    <p>Base Experience: ${e.baseExperience}</p>
                    <p>Peso: ${e.weight}</p>
                    <p>Altura: ${e.height}</p>
                    </div>
                  `
    });

    result.innerHTML = pokeList ;

  }

  catch (error) {
    console.error(`Erro Gerado: ${error}`)
  }
}