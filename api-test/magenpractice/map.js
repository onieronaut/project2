// Initialize the platform object:
var platform = new H.service.Platform({
  apikey: "gOOhBUyAfHGRcot-FlkhEvXg9gbjvdcXml3jbUgdkac"
});

// Obtain the default map types from the platform object
var maptypes = platform.createDefaultLayers();

var map = new H.Map(
  document.getElementById("mapContainer"),
  maptypes.vector.normal.map,
  {
    zoom: 10,
    center: { lng: 20.4, lat: 52.51 }
  },

  
);

var geocodingParams = {
    searchText: '200 S Mathilda Ave, Sunnyvale, CA'
  };

// Define a callback function to process the geocoding response:
var onResult = function(result) {
var locations = result.Response.View[0].Result,
    position,
    marker;
// Add a marker for each location found
for (i = 0;  i < locations.length; i++) {
  position = {
    lat: locations[i].Location.DisplayPosition.Latitude,
    lng: locations[i].Location.DisplayPosition.Longitude
  };
  marker = new H.map.Marker(position);
  map.addObject(marker);
}
};

// Get an instance of the geocoding service:
var geocoder = platform.getGeocodingService();

// Call the geocode method with the geocoding parameters,
// the callback and an error callback function (called if a
// communication error occurs):
geocoder.geocode(geocodingParams, onResult, function(e) {
alert(e);
});





// // Enable the event system on the map instance:
// var mapEvents = new H.mapevents.MapEvents(map);

// // Add event listener:
// map.addEventListener("tap", function(evt) {
//   // Log 'tap' and 'mouse' events:
//   console.log(evt.type, evt.currentPointer.type);
// });

// var behavior = new H.mapevents.Behavior(mapEvents);
// var icon = new H.map.Icon('animal-paw-print-pngrepo-com.png');
// // Create a marker using the previously instantiated icon:
// var marker = new H.map.Marker({ lng: 13.4, lat: 52.51 }, { icon: icon });

// // Add the marker to the map:
// map.addObject(marker);



