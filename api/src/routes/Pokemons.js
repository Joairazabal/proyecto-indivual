const { Router } = require('express');
const { getAllPokemon} = require('./middleware/getAllPokemons')
const { getById } = require('./middleware/idPokemons')
const {getByName} = require('./middleware/namePokemons')
const {Pokemon, Tipo} = require('../db');
const router = Router();



router.get('/', async (req, res, next) => {
  const { name } = req.query;
  try {
    const response = await getAllPokemon();
    if (name) {
      const responseName = await getByName(name);
      res.status(200).send(responseName);
    } else {
      res.status(200).json(response);
    }
  } catch (e) {
    next(e);
    res.status(400).send('Server error');
  }
});


router.get('/:idPokemon', async(req, res) => {
    const { idPokemon } = req.params
    try {
        idPokemon ?
            res.status(200).send(await getById(idPokemon)) :
            res.status(404).send('No existe un pokemon con ese id')
    } catch (e) {
        res.status(400).send('Server error');
    }
})

router.post('/', async (req, res) => {
  const { name, hp, attack, defense, speed, height, weight, type, img } = req.body;
  try {
    let newPokemon = await Pokemon.create({
      name,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      img,
    });
    try {
      
      let matchTypes = await Tipo.findAll({ where: { name: type } });
      newPokemon.addTipo(matchTypes);
   
    } catch (error) {
      next(error);
    }
    res.send('Se creo un pokemon');
  } catch (e) {
    res.status(404).send('Server error');
    console.log(e);
  }
});




module.exports = router


