

const express = require("express"); // an obj that we do not want to change
const cors = require("cors");
const server = express(); // calling it

const names = [{
  "name": "Jae"
  }, {
  "name": "Samantha"
  }, {
  "name": "Dan"
  }, {
  "name": "Jase"
  }];

const favFood = [{
  "food": "beer",
  "age": 19
  }, {
  "food": "whiskey",
  "age": 23
  }, {
  "food": "stouts",
  "age": 28
  }];

server.use(cors());

server.get("/favfood", function( request, response ){
  console.log("food request: ", request);
  console.log("food response: ", response);
  response.send(favFood); // will see on postman
});

server.get("/getnames", function (request, response) {
  console.log("name request: ", request);
  console.log("name response: ", response);
  response.send(names); // will see on postman
});

server.listen(3001, function() {
  console.log("carrier has arrived"); // will see on cmdr
});
