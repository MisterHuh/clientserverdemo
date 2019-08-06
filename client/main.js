

$(document).ready(startApp);

function startApp() {
  getData();
}

function getData() {
  var settings = {
    url: "../server/getnames.json", // referring back to the dummy data we created in step 5
    method: "get",
    dataType: "json",

    success: handleDataFromServer
  }

  $.ajax( settings )
}

function handleDataFromServer( response ) {
  console.log(response); // always check to see if this works first. Then finish writing the rest of the code
}
