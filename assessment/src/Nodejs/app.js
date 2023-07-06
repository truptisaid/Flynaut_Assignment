const MongoClient = require("mongodb");
const passport = require("passport");
const express = require("express");
const socketio = require("socket.io");

const app = express();
const server = app.listen(3000);
const io = socketio(server);

const db = new MongoClient("mongodb://localhost:27017/mydatabase");

db.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }

  const usersCollection = db.collection("users");

  // Passport.js configuration

  passport.use(new FacebookStrategy({
    clientID: "YOUR_CLIENT_ID",
    clientSecret: "YOUR_CLIENT_SECRET",
    callbackURL: "http://localhost:3000/auth/facebook/callback",
  }, (accessToken, refreshToken, profile, done) => {
    // Do something with the user profile.
    done(null, profile);
  }));

  // Middleware for token

  app.use(passport.authenticate("jwt", { session: false }));

  // Example for Promise.all, resolve, reject

  const promises = [
    Promise.resolve("Hello, world!"),
    Promise.reject("Something went wrong!"),
  ];

  Promise.all(promises).then((results) => {
    console.log(results); // ["Hello, world!"]
  }).catch((error) => {
    console.log(error); // "Something went wrong!"
  });

  // Example for Aggregate Lookup property

  const result = usersCollection.aggregate([
    {
      $lookup: {
        from: "posts",
        localField: "_id",
        foreignField: "author",
        as: "posts",
      },
    },
  ]);

  console.log(result);

  // Example for populate on a array field

  const user = usersCollection.findOne({ _id: 1 });

  user.posts = user.posts.populate("author");

  console.log(user);

  // Socket emit and on function example

  io.on("connection", (socket) => {
    socket.on("message", (data) => {
      console.log(data);
    });

    socket.emit("message", "Hello from the server!");
  });

  // Indexing for schemas

  usersCollection.createIndex({ username: 1 }, { unique: true });
});
