const Hero = require('../models/heroesModel');
const mongoose = require('mongoose');
const { checkNewHero } = require('../middleware/checkPost')

// get all heroes
const getAllHeroes = async (req, res) => {
    const heroes = await Hero.find({}).sort({createdAt: -1});

    res.status(200).json(heroes);
}

// get single hero
const getHero = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Invalid id" });
    }
    const hero = await Hero.findById(id);

    if(!hero) {
        return res.status(404).json({ error: "No find hero" });
    }
    res.status(200).json(hero);
}

// create a hero
const createNewHero = async (req, res) => {
    const { name, damage, defense, speed } = req.body;
   
    if(!name || damage + defense + speed > 7) {
       return res.status(400).json({ error: "no name filled or the sum must 7" })
    }

    try {
        const checkBeforeReq = checkNewHero(req.body);
        const hero = await Hero.create(checkBeforeReq);
        res.status(200).json(hero);
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

// delete a hero
const deleteHero = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No find hero" })
    };
    const hero = await Hero.findOneAndDelete({_id: id});

    if(!hero) {
        return res.status(404).json({ error: "No find hero" });
    }
    
    res.status(200).json(hero);
}

// update a hero
const updateHero = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No find hero" })
    };
    const hero = await Hero.findByIdAndUpdate({ _id: id }, { ...req.body });

    if(!hero) {
        return res.status(404).json({ error: "No find hero" });
    }

    res.status(200).json(hero);
};

module.exports = {
    createNewHero,
    getAllHeroes,
    getHero,
    deleteHero,
    updateHero
}