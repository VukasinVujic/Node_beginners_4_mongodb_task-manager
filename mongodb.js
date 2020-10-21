const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";

const databaseName = "task-manger";
// const databaseName2 = "task-manger2";

MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to conect ");
    }

    const db = client.db(databaseName);
    // const db2 = client.db(databaseName2);
    // //insert one user
    // db.collection("users").insertOne(
    //   {
    //     // insertone will be called as async function
    //     name: "Vukasin",
    //     age: 33,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Jen",
    //       age: 28,
    //     },
    //     {
    //       name: "Gunter",
    //       age: 27,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert documents(objects)");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    db.collection("user2").insertMany(
      [
        { description: "beautiful", complited: true },
        { description: "ugly", complited: false },
        { description: "strong", complited: true },
      ],
      (error, result) => {
        if (error) {
          return console.log("Unable to insert documents");
        }
        console.log(result.ops);
      }
    );
  }
);
