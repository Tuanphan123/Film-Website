const router = require("express").Router();
const Movie = require("/Build Projects/Film App/api/models/Movie");
const verify = require("/Build Projects/Film App/api/verifyToken");

//CREATE
router.post("/", verify, async(req,res) =>{
    if (req.user.isAdmin){
        const newMovie = new Movie(req.body);
        try{
            const savedMovie = await newMovie.save();
            res.status(201).json(savedMovie);
        }catch(err){
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("you are not allowed");
    }
});

//DELETE
router.delete("/:id", verify, async(req,res) =>{
    if (req.user.isAdmin){
        try{
            await Movie.findByIdAndDelete(req.params.id);
            res.status(200).json("this movie has been deleted");
        }catch(err){
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("you are not allowed");
    }
});
