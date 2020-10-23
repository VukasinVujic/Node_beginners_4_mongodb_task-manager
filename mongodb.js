//new way
const { MongoClient, ObjectID } = require("mongodb");

// old way
// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const connectionURL = "mongodb://127.0.0.1:27017";

const databaseName = "task-manger";

MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to conect ");
    }

    const db = client.db(databaseName);

    // db.collection("users")
    //   .deleteMany({ age: 33 })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // db.collection("user2")
    //   .deleteOne({ description: "beautiful" })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }
);
