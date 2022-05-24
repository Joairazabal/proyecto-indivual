const axios = require('axios');

const getById= async(id)=>{
 try{
if(id){
  const pokemon= await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
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
    
}else{
    throw new Error('No se encontro un pokemon con ese id')
}
 }catch(e){
    res.status(400).send('Server error');  
 }
}
module.exports= {getById};