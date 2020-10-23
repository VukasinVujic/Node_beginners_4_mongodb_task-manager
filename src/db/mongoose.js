const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//create a model
const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    //package validator
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Emeail is not valid");
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    // manual validator
    validate(value) {
      if (value) {
        throw new Error("value must be a number");
      }
    },
  },
});

// create an instance of the model
const me = new User({
  name: "   Mike    ",
  email: "lalala@MEAD.IO    ",
});

// to save instance in db, returns promise
me.save()
  .then(() => {
    console.log(me);
  })
  .catch((error) => {
    console.log("error: " + error);
  });

// const Task = mongoose.model("Task", {
//   descrition: {
//     type: String,
//
//   },
//   complited: {
//     type: Boolean,
//   },
// });

// const newTask = new Task({ descrition: "clean room", complited: false });

// newTask
//   .save()
//   .then(() => {
//     console.log(newTask);
//   })
//   .catch((error) => {
//     console.log("Error: " + error);
//   });
