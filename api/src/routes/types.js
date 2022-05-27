const { Router } = require('express');
const router = Router();
const { getTypesDb } = require('./middleware/getAllPokemons');

router.get('/', async(req,res)=>{
    const tipo = await getTypesDb();
    try {
     tipo?
     res.status(200).send(tipo) :
     res.status(404)
 } catch (error) {
     res.status(404).send('Server Error')
 }
})
module.exports= router