

$(document).ready(startApp);

/* initial set up */
function startApp() {
  getData();
}

/* setting up ajax call & calling it */
function getData() {
  var settings = {
    url: "../server/favfood.json", // referring back to the dummy data we created in step 5
    method: "get",
    dataType: "json",

    success: handleDataFromServer
  }

  $.ajax( settings )
}

/* ajax call success function */
function handleDataFromServer( response ) {
  console.log(response); // always check to see if this works first. Then finish writing the rest of the code
}
