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

    // for id has to be like that because id is in binary format
    // db.collection("users").findOne(
    //   { _id: new ObjectID("5f90553b5a6a5f45bb4e018b") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("Couldn't find user");
    //     }

    //     console.log(user);
    //   }
    // );
    // db.collection("users")
    //   .find({ age: 33 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    // db.collection("users")
    //   .find({ age: 33 })
    //   .count((error, users) => {
    //     console.log(users);
    //   });

    db.collection("user2").findOne(
      {
        _id: new ObjectID("5f901fea2398e922bcabadb1"),
      },
      (error, result) => {
        if (error) {
          return console.log("Unable to find");
        }
        console.log(result);
      }
    );

    db.collection("user2")
      .find({ complited: true })
      .toArray((error, result) => {
        if (error) {
          return console.log("Unable to find");
        }

        console.log(result);
      });
  }
);
