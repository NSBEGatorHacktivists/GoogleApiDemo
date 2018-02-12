var map;
var startMarker;
var endMarker; 
var pickingStart = true;
var startLocListener;
var endLocListener;
var directionsDisplay;
var directionsService; 

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 29.6428471, lng: -82.3526396},
		zoom: 15
	});

	 startMarker = new google.maps.Marker({
          position: {lat: 29.6428471, lng: -82.3526396},
          map: map,
          draggable: true,
          animation: google.maps.Animation.DROP
        });
	  startLocListener = google.maps.event.addListener(map, 'click', function(event) {
          	startMarker.setPosition(event.latLng);
        });

	  directionsService = new google.maps.DirectionsService();
	  directionsDisplay = new google.maps.DirectionsRenderer();
	  directionsDisplay.setMap(map);
}


$(document).ready(function(){
	$("#button").click(function(){
		if(pickingStart) {
			pickingStart = false; 
			startMarker.setDraggable(false);
			startMarker.setOpacity(0.5);
			google.maps.event.removeListener(startLocListener);
			$("#title").text("Select Your Desination");
		    endMarker = new google.maps.Marker({
            	position: map.getCenter(),
            	map: map,
            	draggable: true,
            	animation: google.maps.Animation.DROP
        	});
		    endLocListener = google.maps.event.addListener(map, 'click', function(event) {
          	endMarker.setPosition(event.latLng);
        	});
		}
		else {
			endMarker.setDraggable(false);
			endMarker.setOpacity(0.5);
			google.maps.event.removeListener(endLocListener);
			$("#title").text("Enjoy your trip!");
			$("#button").hide();
			var start = startMarker.getPosition();
		    var end = endMarker.getPosition();
		  var request = {
		    origin: start,
		    destination: end,
		    travelMode: 'WALKING'
		  };
		  directionsService.route(request, function(result, status) {
		    if (status == 'OK') {
		      directionsDisplay.setDirections(result);
		      console.log(result);
		      //holds list of instructions 
		      var directions = result.routes[0].legs[0].steps;
		      
		      for(var i = 0; i < directions.length;i++) {
		      	var instruction = directions[i].instructions;
		      	var newElement = $("<li></li>").html(instruction);
		      	$("#list").append(newElement);
		      }
		    }
		  });

		  startMarker.setMap(null);
		  endMarker.setMap(null);
		}
	});
});