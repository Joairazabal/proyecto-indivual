const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
//Me traigo los middlewares

//Me traigo los modelos y el servidor.
const { Pokemon, Tipo } = require('../db.js');
const server = require('../app.js');
const pokemons = require('./Pokemons');
const types = require('./types')
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/pokemons', pokemons);
router.use('/types', types);
module.exports = router;
