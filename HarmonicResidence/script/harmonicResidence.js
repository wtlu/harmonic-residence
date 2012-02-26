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
var fb_listen_url = 'https://graph.facebook.com/me/music.listens';
var fb_music_playlist_url = 'https://graph.facebook.com/me/music.playlists';
var fb_access_token = '';

//Post: Allows for authentication with Facebook
//Note that if user is already logged in, then app will not ask user to sign in again
function facebookAuth() {
	if(fb_access_token === '' || fb_access_token === null) {
		auth.authenticateWithFacebook(app_id, permissions, {
			onSuccess : initHR,
			onFailure : function(error) {
				console.log("Authentication failed with error: " + error);
			},
			onComplete : hideLoginButton
		});
	}

}

//Post: Initializes Harmonic Residence after user is logged in
function initHR(fb_token, ttl) {
	fb_access_token = fb_token;
	console.log(ttl);
	console.log('Success! Here is the access token:' + fb_access_token);
	url = fb_listen_url + '?access_token=' + fb_access_token;
	console.log(url);
	$.getJSON(url, function(data) {
					var listens = data.data;
					console.log('we are here');
					console.log(data);
					for(var i=0;i<listens.length;i++) {
						var tracklink = listens[i].data.song.url;
						var trackname = listens[i].data.song.title;
						//$('#listens').append('<li><a href="' + tracklink + '">' + trackname + '</a></li>');
						console.log(trackname);
					}
				});
}

// Handle URI arguments
application.observe(models.EVENT.ARGUMENTSCHANGED, handleArgs);
	
function handleArgs() {
	var args = models.application.arguments;
	console.log('the args are: ' + args);
	$(".section").hide();	// Hide all sections
	$("#"+args[0]).show();	// Show current section
	
	// If there are multiple arguments, handle them accordingly
	if(args[1]) {		
		switch(args[0]) {
			case "session":
				//sessionInput(args);
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
	});

}

$(function(){
	
	console.log('Loaded.');
	bindLoginButtons();
	if(fb_access_token === '' || fb_access_token === null) {
		//facebookAuth();
		console.log('We are done with auth and the token is below');
		console.log(fb_access_token);
		var fb_listen_request = fb_listen_url + '?access_token=' + fb_access_token;
		var fb_playlist_request = fb_music_playlist_url + '?access_token=' + fb_access_token;
		console.log('the url to access the listening history is below');
		console.log(fb_listen_request);
		console.log('the url to access the playlist is below');
		console.log(fb_playlist_request);
	}
	// Run on application load
	handleArgs();
	handleLinks();
	
});