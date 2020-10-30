const mongoose = require("mongoose");
const Schema = mongoose.Schema


const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now()
  },

  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter an exercise type",
      },

      name: {
        type: String,
        trim: true,
        required: "Enter an exercise name",
      },

      duration: {
        type: Number,
        required: "Enter the duration in minutes",
      },

      weight: {
        type: Number,
        required: "Enter weight!",
      },

      reps: {
        type: Number,
        required: "Enter number of reps",
      },

      sets: {
        type: Number,
        required: "Enter number of sets",
      },

      distance: {
        type: Number,
        required: "Enter distance goal",
      },
    },
  ],
}); 

//First arguement ('workout') --> name of collection
//Second arguement is the const "workoutschema" populates the collection with requirements
const workout = mongoose.model("Workout", workoutSchema);

//exports the schema
module.exports = workout;