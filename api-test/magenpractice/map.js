// Initialize the platform object:



var zipcode = 34744;

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

    var platform = new H.service.Platform({
      apikey: "gOOhBUyAfHGRcot-FlkhEvXg9gbjvdcXml3jbUgdkac"
    });

    var lng = response.coord.lon;
    var lat = response.coord.lat;
    // Obtain the default map types from the platform object
    var maptypes = platform.createDefaultLayers();

    var map = new H.Map(
      document.getElementById("mapContainer"),
      maptypes.vector.normal.map,
      {
        zoom: 10,
        center: { lng: lng, lat: lat }
      }
    );

    var svgMarkup =
      '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;" viewBox="0 0 1.816 2.12875" x="0px" y="0px" fill-rule="evenodd" clip-rule="evenodd"><defs><style type="text/css">.fil0 {fill:black}</style></defs><g><path class="fil0" d="M0.188 0.522c0.055,0 0.106,0.026 0.144,0.069 0.036,0.04 0.06,0.095 0.063,0.156l0 0.014c0,0.057 -0.018,0.108 -0.049,0.147 -0.032,0.04 -0.077,0.066 -0.13,0.069l-0.009 0c-0.055,0 -0.106,-0.026 -0.144,-0.069 -0.036,-0.04 -0.059,-0.095 -0.063,-0.156l0 -0.014c0,-0.057 0.018,-0.109 0.049,-0.147 0.032,-0.04 0.078,-0.066 0.13,-0.069l0.009 0zm0.719 1.082c-0.068,-0.002 -0.127,0.023 -0.184,0.048l-0.004 0.001c-0.059,0.026 -0.116,0.05 -0.185,0.05 -0.023,0 -0.045,-0.003 -0.067,-0.008 -0.065,-0.017 -0.12,-0.058 -0.16,-0.11 -0.039,-0.051 -0.062,-0.113 -0.062,-0.173 0,-0.018 0.002,-0.036 0.007,-0.054 0.021,-0.084 0.089,-0.142 0.158,-0.203 0.068,-0.06 0.139,-0.122 0.15,-0.203 0.012,-0.083 0.048,-0.165 0.114,-0.223 0.056,-0.049 0.133,-0.08 0.234,-0.08 0.101,0 0.178,0.031 0.234,0.08 0.066,0.058 0.102,0.14 0.113,0.223 0.012,0.081 0.083,0.143 0.151,0.203 0.069,0.061 0.136,0.119 0.158,0.203 0.005,0.018 0.007,0.036 0.007,0.054 0,0.06 -0.023,0.122 -0.063,0.173 -0.039,0.052 -0.095,0.093 -0.16,0.11 -0.021,0.005 -0.043,0.008 -0.066,0.008 -0.072,0 -0.132,-0.024 -0.194,-0.05 -0.057,-0.023 -0.115,-0.047 -0.181,-0.049zm0.152 -1.527c0.044,-0.047 0.102,-0.077 0.166,-0.077l0.011 0c0.059,0.004 0.112,0.033 0.149,0.078 0.035,0.043 0.057,0.102 0.057,0.167 0,0.003 0,0.009 -0.001,0.015 -0.003,0.07 -0.031,0.133 -0.073,0.179 -0.043,0.048 -0.102,0.077 -0.166,0.077l-0.01 0c-0.06,-0.003 -0.112,-0.032 -0.149,-0.078 -0.036,-0.043 -0.057,-0.102 -0.057,-0.167 0,-0.003 0,-0.009 0,-0.015 0.004,-0.07 0.032,-0.133 0.073,-0.179zm-0.468 -0.077c0.063,0 0.122,0.03 0.166,0.077 0.041,0.046 0.069,0.109 0.073,0.179 0,0.006 0,0.012 0,0.015 0,0.065 -0.021,0.124 -0.057,0.167 -0.037,0.046 -0.089,0.075 -0.149,0.078l-0.011 0c-0.063,0 -0.122,-0.029 -0.165,-0.077 -0.042,-0.046 -0.07,-0.109 -0.073,-0.179 -0.001,-0.006 -0.001,-0.012 -0.001,-0.015 0,-0.065 0.021,-0.124 0.057,-0.167 0.037,-0.045 0.089,-0.074 0.149,-0.078l0.011 0zm0.893 0.591c0.037,-0.043 0.088,-0.069 0.144,-0.069l0.009 0c0.052,0.003 0.098,0.029 0.13,0.069 0.03,0.038 0.049,0.09 0.049,0.147l-0.001 0.014c-0.003,0.061 -0.027,0.116 -0.062,0.156 -0.038,0.043 -0.089,0.069 -0.145,0.069l-0.009 0c-0.052,-0.003 -0.098,-0.029 -0.13,-0.069 -0.03,-0.039 -0.049,-0.09 -0.049,-0.147l0.001 -0.014c0.003,-0.061 0.027,-0.116 0.063,-0.156z"/></g></svg>';

    var icon = new H.map.Icon(svgMarkup),
      coords = { lat: lat, lng: lng },
      marker = new H.map.Marker(coords, { icon: icon });

    map.addObject(marker);
    map.setCenter(coords);
  });




