const pokeID = [1, 2, 3, 4, 5, 6, 7, 8, 9, 493]

const pokemomArray = []

async function apiCall() {
  
  try { 
 
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
        }
      );
    }
    
  }  
    catch (error) {
    console.error(`Erro Gerado: ${error}`)
  }

}
  




apiCall();