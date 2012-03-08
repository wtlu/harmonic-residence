/**
 *      Harmonic Residence
 *		
 */

// Initialize the Spotify objects
var sp = getSpotifyApi(1),
	auth = sp.require('sp://import/scripts/api/auth'), //For Facebook integration
	models = sp.require("sp://import/scripts/api/models"),
	views = sp.require("sp://import/scripts/api/views"),
	ui = sp.require("sp://import/scripts/ui");
	player = models.player,
	library = models.library,
	application = models.application,
	playerImage = new views.Player();
	
var permissions = ['user_about_me', 'user_actions.music'];
var app_id = '174774552634402';
var fb_access_token = '';
var tempPlaylist = new models.Playlist();

//Post: Allows for authentication with Facebook
//Note that if user is already logged in, then app will not ask user to sign in again
function facebookAuth() {
	$("#login-page").hide(); // Hides login info 

	if(fb_access_token === '' || fb_access_token === null) {
		auth.authenticateWithFacebook(app_id, permissions, {
			onSuccess : initHR,
			onFailure : function(error) {
				console.log("Authentication failed with error: " + error);
			},
			onComplete : function() { }
		});
	}
	// Show tab content
	var args = models.application.arguments;
	$("#"+args[0]).show();
}

//Post: Initializes Harmonic Residence after user is logged in
function initHR(fb_token, ttl) {
	fb_access_token = fb_token;
	console.log(ttl);
	console.log('Success! Here is the access token:' + fb_access_token);
	hideLoginButton(); //Now hide the login button since we have a valid token
	
	getCurrentUserInfo(fb_token);
	getUserFacebookListeningHistory(fb_token);	
	
	var currentUserTracks = getUserSpotifyLibrary();
	console.log(currentUserTracks);
}

// Handle URI arguments
application.observe(models.EVENT.ARGUMENTSCHANGED, handleArgs);
	
function handleArgs() {
	var args = models.application.arguments;
	console.log('the args are: ' + args);
	$(".section").hide();	// Hide all sections
	//$("#"+args[0]).show();	// Show current section
	
	// only if logged in
	if($("#fb-logout-button").is(":visible")) {
		$("#"+args[0]).show();	// Show current section 
		switch(args[0]) {
			case "session":
				startFakeSession();
				break;
			case "settings":
				break;
			case "help":
				break;
		}
	}

	// If there are multiple arguments, handle them accordingly
	if(args[1]) {		
		switch(args[0]) {
			case "session":
				//sessionInput(args);
				startFakeSession();
				break;
			case "settings":
				//settingsInput(args[1]);
				break;
			case "help":
				//helpInput(args[2]);
				break;
		}
	}
}

// Handle items 'dropped' on your icon
application.observe(models.EVENT.LINKSCHANGED, handleLinks);

function handleLinks() {
	var links = models.application.links;
	if(links.length) {
		switch(links[0].split(":")[1]) {
			case "user":
				socialInput(links[0].split(":")[2]);
				break;
			default:
				// Play the given item
				player.play(models.Track.fromURI(links[0]));
				break;
		}		
	} 
}

//Post: Binds the login and logout buttons to logging in and logging out 
function bindLoginButtons() {
	var loginButton = $("#fb-login-button");
			
	loginButton.click(facebookAuth);
	
	var logoutButton = $("#fb-logout-button");
	logoutButton.click(userFacebookLogout);
	$("#fb-logout-button").hide();
}

//Post: Hides the login button
function hideLoginButton() {
	$("#fb-login-button").hide();
	$("#fb-logout-button").show();
}

//Post: Shows the login button
function showLoginButton() {
	$("#fb-login-button").show();
	$("#fb-logout-button").hide();
}

//Pre: User is currently logged in with a token
//Post: Logs the user out of Facebook
function userFacebookLogout() {
	//Init query paramerters
	var homeUrl = 'http://www.facebook.com/connect/login_success.html';
	var logoutUrl = 'https://www.facebook.com/logout.php?';
	var queryParams = [
		'next=' + homeUrl,
		'access_token=' + fb_access_token
		];
	
	var query = queryParams.join('&');	
	
	//Now log out of Facebook
	$.get(logoutUrl + query, function(data) {
		console.log('we logged out');
		fb_access_token = '';
		showLoginButton();
		$(".section").hide();
		$("#login-page").show(); // Login info displayed
	});

}

$(function(){
	
	console.log('Loaded.');
	bindLoginButtons();

	// Run on application load
	handleArgs();
	handleLinks();
	
	// Listen for track changes and update the page
	player.observe(models.EVENT.CHANGE, function (event) {
		if (event.data.curtrack == true) {
			var track = player.track;
			$("#play-history").append('<div>Track changed to: '+track.name+' by '+track.album.artist.name+'</div>');
		}
		nowPlaying();
		
	}); 
});