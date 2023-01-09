const useExtractor = require('../middleware/userExtractor');
const express = require('express');
const {
    createNewHero,
    getAllHeroes,
    getHero,
    deleteHero,
    updateHero
} = require('../controllers/heroesController');

const router = express.Router();

router.get('/', getAllHeroes);

router.get('/:id', getHero);

router.post('/', useExtractor, createNewHero)

router.delete('/:id', useExtractor, deleteHero);

router.patch('/:id', useExtractor, updateHero);

module.exports = router;