console.log("Hello from node");

var Twitter = require('twitter');

var key = require('key');

var t = new Twitter(key);
 
var client = new Twitter({
  consumer_key: 'Skq6pXQx1hFoRUWItgdwFtsfq',
  consumer_secret: '0NmkcH9AIyKMuoWMxqDZASaxNkVirN6HMzqPmbvOwZb2FhDM7e',
  access_token_key: '1024188259918860289-H4DmEZ43QO32hECOD21YJzb8PHHWOX',
  access_token_secret: 'u89if2QqqFXljDn2jrc688PwJUxl5cU9eZq5ZwekcNDLW'
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});