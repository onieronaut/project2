var zipcode = 34684;

function coordinates(zipcode) {
  // Here we are building the URL we need to query the database
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?zip=" +
    zipcode +
    "&appid=166a433c57516f51dfab1f7edaed8413";

  // Here we run our AJAX call to the OpenWeatherMap API
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {
      // Log the queryURL
      console.log(queryURL);

      // Log the resulting object
      console.log(response);

      // Transfer content to HTML

      // Log the data in the console as well
      console.log("long: " + response.coord.lon);
      console.log("lat " + response.coord.lat);
    });
}

coordinates();
