var timer = null; // timer for voting 

$(function(){
	showNowPlaying();
	showVotingResults();
	showChoices();

	beginTimer();
});

// Begins timer
function beginTimer() {
	if (timer == null) {
		timer = setInterval(countdown, 1000);
	}
}

// Counts down until end of voting 
function countdown() {
	// Placeholder timeLeft is set in index.html
	var timeLeft = $("#time").text(); 
	var seconds = parseInt(timeLeft); 
	seconds--;
	$("#time").text(seconds); // updates html 

	// Stops timer
	if (seconds == 0) {
		clearInterval(timer);
	}
}

// Retrieves "Now Playing" song information and prints to page
function showNowPlaying() {
	// songDetails is a placeholder for retrieving song info from server
	var songDetails = new Array("December", "Weezer", "Maladroit", "20");	

	getArtist(songDetails);
	// Adds song details after album art
	$("#album-art").after(createSongDetails(songDetails, "song-info"));
}

// Retrieves and prints voting results
function showVotingResults() {
	// Creates unordered lists for all three songs
	for (var i = 0; i < 3; i++) {
		// voteResults is placeholder for retrieved voting results from server
		var voteResults = new Array(["Map of The Problematique", "MUSE", "Black Holes & Revelations", "56%"], ["Black Hole Sun", "Soundgarden", "Superunknown", "38%"], ["Butterfly", "Weezer", "Pinkerton", "6%"]);
		var rank;
		if (i == 0) {
			rank = "first";
		} else if (i == 1) {
			rank = "second";
		} else {
			rank = "third";
		}
		$("#" + rank).append(createSongDetails(voteResults[i], "results"));//rank));
		
		// Adding percentage to list
		var p = document.createElement("p");
		p.innerHTML = voteResults[i][3]; // percent
		$(p).addClass("percent");
		$("#" + rank).append($(p));
	}
}

// Retrieves and prints song choices to vote for
function showChoices() {
	// songChoices is placeholder for retrieved triplet of song choices
	var songChoices = new Array(["You'll Never Walk Alone", "TOKYO SKA PARADISE ORCHESTRA", "PARADISE BLUE"], ["Boring Machines Disturbs Sleep", "Mogwai", "Happy Songs for Happy People"], ["Californication", "Red Hot Chili Peppers", "Californication"]);
	
	// Creates ul for 3 song choices
	for (var i = 0; i < 3; i++) {
		$("#voting-choices").append(createSongDetails(songChoices[i], "song-" + (i + 1)));
	}
}


// Creates unordered list for song detail (incl. song, artist, album names)
function createSongDetails(detailArray, idName) {
	var ul = document.createElement("ul");
	ul.id = idName;
	for (var i = 0; i < 3; i++){
		var li = document.createElement("li");
		li.innerHTML = detailArray[i];
		var name;
		if (i == 0) {
			name = "song-title";
		} else if (i == 1) {
			name = "artist-name";
		} else {
			name = "album-title";
		} 
		$(li).addClass(name);
		$(ul).append($(li));
	}
	return ul;
}


/// eMusic API ///
/* --------------------------- */

// Gets artist id from eMusic API
function getArtist(songDetails) { 
    // Find artist
   $.ajax( {

        url: "http://api.emusic.com/artist/search",
        data: {            
            format: "JSONP",
            term: songDetails[1], 
            exact: "true",
            apiKey: "b9e2m6p69fnr6ycen25kydv8"
        },
        dataType: "jsonp",
        success: function(data) {
            var i = 0;
            var artist = data.artists[i];
            while (i < data.artists.length) {
               if (artist.name == songDetails[1]) {
                 var id = artist.id;
                 
                 getAlbum(id, songDetails);
                }
                  i++;
                  artist = data.artists[i];
            }
        },

        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest + ":" + textStatus + ":" + errorThrown);
        } 
    });    

}

// Gets album image from eMusic API
function getAlbum(id, songDetails) {
	// Find album
	$.ajax( {

	    url: "http://api.emusic.com/album/search",
	    data: { 
	        format: "JSONP",
	        artistId: id,
	        imageSize: "small",
	        apiKey: "b9e2m6p69fnr6ycen25kydv8"
	    },
	    dataType: "jsonp",
	    success: function(data) {
	        var i = 0;
	        var album = data.albums[i];
	        while (i < data.albums.length) {
	          if (album.name == songDetails[2]) {
	              var img = document.createElement("img");
	              $(img).attr("src", album.image);
	            	$("#album-art").append($(img));
	          }
	          i++;
	          album = data.albums[i];
	        }                                  
	    },

	    error: function(XMLHttpRequest, textStatus, errorThrown) {
	        alert(XMLHttpRequest + ":" + textStatus + ":" + errorThrown);
	    } 
	});   
}


