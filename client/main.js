

$(document).ready(startApp);

/* initial set up */
function startApp() {
  getData();
  getFood()
}

/* setting up ajax call & calling it */
function getData() {
  var settings = {
    url: "http://localhost:3001/getnames", // referring back to the dummy data we created in step 5
    method: "get",
    dataType: "json",

    success: handleNameDataFromServer
  }

  $.ajax( settings )
}

/* setting up ajax call & calling it */
function getFood() {
  var settings = {
    url: "http://localhost:3001/favfood", // referring back to the dummy data we created in step 5
    method: "get",
    dataType: "json",

    success: handleFoodDataFromServer
  }

  $.ajax(settings)
}


/* ajax call success function */
function handleNameDataFromServer( response ) {
  console.log(response); // always check to see if this works first. Then finish writing the rest of the code
  for (var index = 0; index < response.length; index++) {
    var nameDiv = $("<div>").text(response[index].name);
    $("body").append(nameDiv);
  }

}

/* ajax call success function */
function handleFoodDataFromServer(response) {
  console.log(response); // always check to see if this works first. Then finish writing the rest of the code
  for (var index = 0; index < response.length; index++) {
    var foodDiv = $("<div>").text(response[index].food);
    $("body").append(foodDiv);
  }
}
