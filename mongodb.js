const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";

const databaseName = "task-manger";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to conect ");
    }

    const db = client.db(databaseName);

    db.collection("users").insertOne({
      // insert one will be called as async function
      name: "Vukasin",
      age: 33,
    });
  }
);
