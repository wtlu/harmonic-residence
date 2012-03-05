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
	// Where album cover image should be inserted
	var img = document.createElement("img");
	img.src = "albumart.jpg"; // albumart.jpg is placeholder
	img.alt = "album-art"; // place holder naming
	$("#album-art").append($(img));
	
	// songDetails is a placeholder for retrieving song info from server
	var songDetails = new Array("Song title", "Artist name", "Album name", "Time left");	
	
	// Adds song details after album art
	$("#album-art").after(createSongDetails(songDetails, "song-info"));
}

// Retrieves and prints voting results
function showVotingResults() {

	// Creates unordered lists for all three songs
	for (var i = 0; i < 3; i++) {
		// voteResults is placeholder for retrieved voting results from server
		var voteResults = new Array(["Song title 1", "Artist name 1", "Album name 1", "Percent 1"], ["Song title2", "Artist name2", "Album name2", "Percent2"], ["Song title3", "Artist name3", "Album name3", "Percent3"]);
		var rank;
		if (i == 0) {
			rank = "first";
		} else if (i == 1) {
			rank = "second";
		} else {
			rank = "third";
		}
		$("#voting-results").append(createSongDetails(voteResults[i], rank));
		
		// Adding percentage to list
		var li = document.createElement("li");
		li.innerHTML = voteResults[i][3]; // percent
		$(li).addClass("percent");
		$("#" + rank).append($(li));
	}
}

// Retrieves and prints song choices to vote for
function showChoices() {
	// songChoices is placeholder for retrieved triplet of song choices
	var songChoices = new Array(["Song title1", "Artist name1", "Album name1"], ["Song title2", "Artist name2", "Album name2"], ["Song title3", "Artist name3", "Album name3"]);
	
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



