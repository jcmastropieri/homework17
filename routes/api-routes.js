const router = require('express').Router();
const db = require("../models")
router.get('/workouts', (req,res)=>{
    db.find().then(data=> res.json(data))
});

router.put("/workouts/:id", (req,res)=>{
    console.log(req.body,req.params.id);
    db.findByIdAndUpdate(req.params.id, {$push:{exercises:req.body}}).then(data=>res.json(data))
})

router.post("/workouts", (req,res)=>{
    db.create({}).then(data=> res.json(data))
})

module.exports = router;