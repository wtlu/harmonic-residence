/*
 *
 * Harmonic Residence User Controller
 */


//Pre: User is logged into Facebook and we have a valid Facebook Token
//Post: Gets the current user's information
function getCurrentUserInfo(fb_token) {
	var fb_user_url = 'https://graph.facebook.com/me';
	var url = fb_user_url + '?access_token=' + fb_token;
	console.log(url);
	var user_id,
		first_name,
		last_name,
		gender;
	
	$.getJSON(url, function(data) {
					user_id = data.id;
					first_name = data.first_name;
					last_name = data.last_name;
					gender = data.gender;
					console.log('Done! Here is the user info');
					console.log('user_id: ' + user_id);
					console.log('first_name: ' + first_name);
					console.log('last_name: ' + last_name);
					console.log('gender: ' + gender);		
				});
	
}

//Post: Gets the current user's listening history from Facebook
function getUserFacebookListeningHistory(fb_token) {
	var fb_listen_url = 'https://graph.facebook.com/me/music.listens';
	var fb_music_playlist_url = 'https://graph.facebook.com/me/music.playlists';
	url = fb_listen_url + '?access_token=' + fb_token;
	console.log(url);
	$.getJSON(url, function(data) {
					var listens = data.data;
					console.log('we are here');
					console.log(data);
					if(listens.length === 0) {
						console.log('This user does not have a listening history with FB!!');
					}
					
					for(var i=0;i<listens.length;i++) {
						var tracklink = listens[i].data.song.url;
						var trackname = listens[i].data.song.title;
						//$('#listens').append('<li><a href="' + tracklink + '">' + trackname + '</a></li>');
						console.log(trackname + ' and link is:' + tracklink);
					}
					return listens; //Note this only happens after the response comes back
	});
}

//Post: returns a list of all the songs in current user's library
function getUserSpotifyLibrary() {
	var tracks = library.tracks;
	return tracks;
}

