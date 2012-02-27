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