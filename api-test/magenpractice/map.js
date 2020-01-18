// Initialize the platform object:
var platform = new H.service.Platform({
  apikey: "gOOhBUyAfHGRcot-FlkhEvXg9gbjvdcXml3jbUgdkac"
});

var lng = -81.3792 
var lat = 28.5383
// Obtain the default map types from the platform object
var maptypes = platform.createDefaultLayers();

var map = new H.Map(
  document.getElementById("mapContainer"),
  maptypes.vector.normal.map,
  {
    zoom: 10,
    center: { lng: lng, lat: lat }
  }
) 

var svgMarkup = '<svg width="24" height="24" ' +
'xmlns="http://www.w3.org/2000/svg">' +
'<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
'height="22" /><text x="12" y="18" font-size="12pt" ' +
'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
'fill="white">H</text></svg>'


var icon = new H.map.Icon(svgMarkup),
coords = {lat:lat, lng:lng},
marker = new H.map.Marker(coords, {icon :icon});

map.addObject(marker);
map.setCenter(coords);