const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getAllPokemon} = require('./middleware/getAllPokemons')
const { getById } = require('./middleware/idPokemons')
const {Pokemon, Tipo} = require('../db');
const router = Router();


// [ ] GET /pokemons:
// Obtener un listado de los pokemons desde pokeapi.
// Debe devolver solo los datos necesarios para la ruta principal
router.get('/', async(req, res) => {
    const { name } = req.query;
    try {
        const response = await getAllPokemon();
        if (name) {
            const pokemonName = await response.filter((el) =>
                el.name.toLowerCase().includes(name.toLowerCase())
            );
            pokemonName.length ?
                res.status(200).send(pokemonName) :
                res.status(404).send('No existe un pokemon con ese nombre');
        } else {
            res.status(200).send(response);
        }
    } catch (e) {
        res.status(400).send('Server error');
    }
});


router.get('/:idPokemon', async(req, res) => {
    const { idPokemon } = req.params
    try {
        // const pokemon= await getById(idPokemon)
        idPokemon ?
            res.status(200).send(await getById(idPokemon)) :
            res.status(404).send('No existe un pokemon con ese id')
    } catch (e) {
        res.status(400).send('Server error');
    }
})





router.post('/', async (req, res) => {
    const { name, hp, attack, defense, speed, height, weight, tipo } = req.body;
    try {
      let newPokemon = await Pokemon.create({
        name,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
      });
      if (Array.isArray(tipo)) {
        for (let i = 0; i < tipo.length; i++) {
          let tipoDb = await Tipo.findOne({ where: { name: tipo[i] } });
          newPokemon.addTipo(tipoDb);
        }
      } else {
        newPokemon.addTipo(await Tipo.findOne({ where: { name: tipo } }));
      }
  
      res.send('Se creo un pokemon');
    } catch (e) {
      res.status(404).send('Server error');
      console.log(e);
    }
  });

module.exports = router




// [ ] GET /pokemons/{idPokemon}:
// Obtener el detalle de un pokemon en particular
// Debe traer solo los datos pedidos en la ruta de detalle de pokemon
// Tener en cuenta que tiene que funcionar tanto para un id de un pokemon existente en pokeapi o uno creado por ustedes
// [ ] GET /pokemons?name="...":
// Obtener el pokemon que coincida exactamente con el nombre pasado como query parameter (Puede ser de pokeapi o creado por nosotros)
// Si no existe ningún pokemon mostrar un mensaje adecuado
// [ ] POST /pokemons:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de pokemons por body
// Crea un pokemon en la base de datos
// [ ] GET /types:
// Obtener todos los tipos de pokemons posibles
// En una primera instancia deberán traerlos desde pokeapi y guardarlos en su propia base de datos y luego ya utilizarlos desde allí