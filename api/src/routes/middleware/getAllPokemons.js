const axios = require('axios');
const {Pokemon,Tipo} = require('../../db');


const getApiData = async () => {
  try {
    //esto me da un array con urls
    //Con previusPokemonUrls me refiero a que son los primeros pokemons que traigo
    const previusPokemoUrls = await axios.get(
      'https://pokeapi.co/api/v2/pokemon'
    );
    //Entro a la propiedad next del previus y me traigo los otros 20
    const nextPokemonUrl = await axios.get(previusPokemoUrls.data.next);

    //Concateno los arrays de results que adentro tienen name y url de cada pokemon
    const allPokemonsUrls = [
      ...previusPokemoUrls.data.results,
      ...nextPokemonUrl.data.results,
    ];

    //Aca guardo la respuesta, es decir el array de pokemons
    //Si no usara promise.all esto me devuelve un array de promises pending
    //Usando este metodo, no se devuelve hasta que NO TERMINA de resolver todas las promesas
    //A este metodo le paso el array con todos los pokemons y accedo a la prop url
    //Con eso puedo conseguir la data de cada pokemon y guardarla en un obj
    const pokeApi = await Promise.all(
      allPokemonsUrls.map(async (el) => {
        let pokemon = await axios(el.url);
        return {
          id: pokemon.data.id,
          name: pokemon.data.name,
          hp: pokemon.data.stats[0].base_stat,
          attack: pokemon.data.stats[1].base_stat,
          defense: pokemon.data.stats[2].base_stat,
          speed: pokemon.data.stats[5].base_stat,
          height: pokemon.data.height,
          weight: pokemon.data.weight,
          img: pokemon.data.sprites.front_default,
          type: pokemon.data.types,
        };
      })
    );
    return pokeApi;
  } catch (e) {
    console.log(e);
  }
};

const getDbData = async () => {
  const info = await Pokemon.findAll({
    includes: {
      model: Tipo,
      attributes: ['name'],
      through: {
        attributes: [],
      },
    },
  });
  return info;
};

const getAllPokemon = async () => {
  const apiData = await getApiData();
  const dbData = await getDbData();
  const dbPlusApi = await [...apiData, ...dbData];
  return dbPlusApi;
};

// const pokeTypes= async()=>{
//   const tipos= await getAllPokemon()
//   const allTypes= await tipos.map((t)=>t.type)
//   return allTypes
// }

const pokeTypes= async()=>{
  const typesUrl = await axios.get('https://pokeapi.co/api/v2/type')
  const allTypes= await typesUrl.data.results.map((e)=>e.name)
  allTypes.forEach(tipo => { Tipo.findOrCreate({
    where:{
      name:tipo
    }
  })
    
  });
}
const getTypesDb= async()=>{
  await pokeTypes();
  try {
    const pokemonTypes= await Tipo.findAll()
    return pokemonTypes
  } catch (e) {
  throw new Error("Server Error")
  }
}


 module.exports= {getAllPokemon, getTypesDb}