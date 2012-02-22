var sp = getSpotifyApi(1);
var models = sp.require('sp://import/scripts/api/models');
var player = models.player;

// Updates page content to match selected tab
function tabsUpdate() {
	var currentTab = sp.core.getArguments(); 
	$(".section").hide(); // Hides all sections
	$("#"+currentTab).show(); // Shows current section
}

$(function(){
	
	console.log('Loaded.');

	tabsUpdate();
	sp.core.addEventListener("argumentsChanged", tabsUpdate); // Change page content after tab change

});
