

const express = require("express"); // an obj that we do not want to change
const cors = require("cors");
const mysql = require("mysql");
const creds = require("./mysqlcredentials.js");
const db = mysql.createConnection( creds );
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
  // response.send(favFood); // will see on postman
  /* get rid of this after step 11. response.send will close the connection afterwards */
});

/* when the server gets a GET request with "/getnames" */
server.get("/getnames", function (request, response) {
  console.log("name request: ", request);
  console.log("name response: ", response);
  // response.send(names); // will see on postman
  /* get rid of this after step 11. response.send will close the connection afterwards */

  db.connect( ()=>{ /* connec to db */
    db.query("SELECT * FROM `names`", (error, data, fields)=>{
      if(!error){
        response.send(data); // sending the data back to the server
      }
    })
  })

});

server.listen(3001, function() {
  console.log("carrier has arrived"); // will see on cmdr
});
