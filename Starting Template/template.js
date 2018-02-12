//Global Variable defintions
var map;					//Will store the Google map
var startMarker;			//Will store the marker used to indicate start location	
var endMarker; 				// Stores the marker used to indicate end location	
var pickingStart = true;	//Boolean variable used with confirmation button 
var startLocListener;		//Will a store a onClick action listener when picking the starting marker
var endLocListener;			//Will a store a onClick action listener when picking the end marker	
var directionsDisplay;		//Will store a google maps render object used to display directions on the map
var directionsService; 		//Will store a goople maps direction service object to get directions 

//This is the function that will be called after Google handles our request 
function initMap() {
	
}

//This is a JQuery function the runs after the HTML page has been loaded 
$(document).ready(function(){
	
	//A Jquery function that selects the HTML element with id = button 
	//The element is then assigned a function that runs when that element is clicked
	$("#button").click(function(){
		if(pickingStart) {

		}
		else {

		}
});