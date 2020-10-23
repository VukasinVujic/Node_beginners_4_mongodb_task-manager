const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//create a model
const User = mongoose.model("User", {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

// // create an instance of the model
// const me = new User({ name: "Pero", age: "sadfsdfsdf" });

// // to save instance in db, returns promise
// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("error: " + error);
//   });

const Task = mongoose.model("Task", {
  descrition: {
    type: String,
  },
  complited: {
    type: Boolean,
  },
});

const newTask = new Task({ descrition: "clean room", complited: false });

newTask
  .save()
  .then(() => {
    console.log(newTask);
  })
  .catch((error) => {
    console.log("Error: " + error);
  });
