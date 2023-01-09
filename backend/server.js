require('dotenv').config();
const cors = require('cors')
const express = require("express");
const mongoose = require('mongoose');
const heroesRoutes = require('./routes/heroes');
const userRoutes = require('./routes/users');

//express app
const app = express();

//enable cors
app.use(cors({
    origin: 'http://localhost:3000'
}));

//middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
})

//routes
app.use('/api/heroes', heroesRoutes, userRoutes);

//connect to DB
async function main() {
    if(!!process.env.MONGO_URI) {
        try {
            await mongoose.connect(process.env.MONGO_URI);
            //listen for request
            app.listen(process.env.PORT, () => {
                console.log("connected to DB & listen port", process.env.PORT);
            });
        } catch (error) {
            console.error(error)
        }
    }
}
main();