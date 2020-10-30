const express = require("express");

const db = require("../models")

module.exports = function(app) {
    
    // Each of the routes handles the api information
    
    //Retrieve
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}, (err, workouts) => {
            if(err){
                console.log(err);
            } else {
                res.json(workouts)
            }
        });
    });
    
    app.get("/api/workouts/range", (req,res) => {
        db.Workout.find({})
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.json(err);
        });
    });
    
    //Create
    app.post('/api/workouts', (req,res) => {
        db.Workout.create({}).then(newWorkout => {
            res.json(newWorkout);
        });
    });
    
    //update excerise and push to models
    app.put("/api/workouts/:workout", ({ params, body }, res) => {
        db.Workout.findOneAndUpdate(
            { _id: params.id},
            
            {$push: {excercises: body }},
            
            { upsert: true, useFindandModify:false},
            
            updatedWorkout => {
                res.json(updatedWorkout);
            }
        );
    });
};

