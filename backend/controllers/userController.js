const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

//create a user
const createUser = async (req, res) => {
    const { username, password } = req.body;

    if(!username || !password) {
        return res.status(400).json({ error: "username or password have not been filled" })
    };

    const checkExistUser = await User.findOne({ username });
    if(checkExistUser) {
        return res.status(400).json({ error: "this user already exist" })
    }
    
    try {
        const newUser = {
            username: username,
            password: await bcrypt.hash(password, 10)
        };
        const createUser = await User.create(newUser);
        res.status(200).json({ success: `user: ${createUser.username} was created` });
    } catch (error) {
        res.status(404).json({error: error.message})
    }
};

//login user
const loginUser = async (req, res) => {
    const { username, password } = req.body;

    if(!username | !password) {
        return res.status(400).json({ error: "username or password have not been filled" })
    };

    const checkExistUser = await User.findOne({ username });
    const passwordCorrect = checkExistUser === null
    ? false
    : await bcrypt.compare(password, checkExistUser.password)

    if(!passwordCorrect) {
        res.status(401).json({ error: "invalid username or password" })
    }

    const userForToken = {
        id: checkExistUser._id,
        username: checkExistUser.username
    };
    const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: 60 * 60 * 24 }) 

    res.send({
        name: `${checkExistUser.username}`,
        token
    });
}

module.exports = { createUser, loginUser }