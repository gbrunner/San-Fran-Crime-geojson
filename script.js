var map = L.map('map').setView([37.7, -122.4], 10);

  // load a tile layer
L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);

  // load GeoJSON from an external file
  $.getJSON("https://raw.githubusercontent.com/gbrunner/adv-programming-for-gis-and-rs/master/Web%20Development%20Module/Unit%201%20-%20GitHub%20and%20Leaflet/sf_crime.geojson",function(data){
         var ratIcon = L.icon({
    iconUrl: 'https://cdn.imgbin.com/13/15/2/imgbin-handcuffs-computer-icons-criminal-law-crime-handcuffs-Q6gNx6nBwL20Puftjcn3pmtC7.jpg',
    iconSize: [30,30]
  }); 
  L.geoJson(data  ,{
    pointToLayer: function(feature,latlng){
	    return L.marker(latlng,{icon: ratIcon});
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup('<h1>Title: '+feature.properties.title+'</h1><p>Description:  '+feature.properties.description+'</p>');
    }
  }).addTo(map);
});
