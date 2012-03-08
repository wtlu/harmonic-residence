/*
 *
 * Harmonic Residence Session Controller
 */
 
 
//Post: Create a Music Session based on the given group_id
function createSession(name, description, group_id) {
	//Call our own server
	//Get back a session id
} 

//Post: Ends a session based on the given session id
function endSession(session_id) {
	//End a session
	//Now call our server
}

//Post: Starts a fake session
function startFakeSession() {
	console.log('Now in fake session!');
	var tracks = library.tracks;
	var track = tracks[Math.floor(Math.random()*tracks.length)];
	clearPlaylist(tempPlaylist);
	tempPlaylist.add(track.data.uri);
	console.log(tempPlaylist);
	player.play(track.data.uri, tempPlaylist.data.uri, 0);
	e.preventDefault();
}

//Post: Clear the given playlist
function clearPlaylist(playlist) {
	console.log('now in clearPlaylist');
	console.log(playlist);
	while (playlist.data.length > 0) {
		playlist.data.remove(0);
	}
}

function nowPlaying() {

	// This will be null if nothing is playing.
	var track = player.track;

	if (track == null) {
		$("#now-playing").html("Painful silence!");
	} else {
		var link = null;
		if (player.context)
			link = new models.Link(player.context);
		else
			link = new models.Link(player.track.uri);
			
		if (link.type === models.Link.TYPE.ARTIST)
			playerImage.context = models.Artist.fromURI(link.uri);
		else if (link.type === models.Link.TYPE.PLAYLIST)
			playerImage.context = models.Playlist.fromURI(link.uri);
		else if (link.type === models.Link.TYPE.INTERNAL) {
			if (tempPlaylist.length > 0)
				playerImage.context = tempPlaylist;
		}
			
		$("#now-playing").empty();
		var cover = $(document.createElement('div')).attr('id', 'player-image');

		if (link.type === models.Link.TYPE.TRACK || link.type === models.Link.TYPE.LOCAL_TRACK ||
			(link.type === models.Link.TYPE.INTERNAL && tempPlaylist.length == 0)) {
			cover.append($(document.createElement('a')).attr('href', track.data.album.uri));
			var img = new ui.SPImage(track.data.album.cover ? track.data.album.cover : "sp://import/img/placeholders/300-album.png");
			cover.children().append(img.node);
		} else {
			cover.append($(playerImage.node));
		}
		
		$("#now-playing").append(cover);
		
		var song = '<a href="'+track.uri+'">'+track.name+'</a>';
		var album = '<a href="'+track.album.uri+'">'+track.album.name+'</a>';
		var artist = '<a href="'+track.album.artist.uri+'">'+track.album.artist.name+'</a>';
		var context = player.context, extra ="";
		if(context) { extra = ' from <a href="'+context+'">here</a>'; } // too lazy to fetch the actual context name
		$("#now-playing").append(song+" by "+artist+" off "+album+extra);
	}
	
}