var TwitterApi = require('twitter-api-v2');

const twitterClient = new TwitterApi.TwitterApi('AAAAAAAAAAAAAAAAAAAAAD9QgwEAAAAAjY1rm%2BHWl5o3mZmIKdRDicsfEQc%3DAarkYFMRLVWzbuPLp8gCsVWN7uEtboR4xxv2wybkah5Atq9HrY');

function Tweet(message) {
    console.log("Tweeting: " + message);
    twitterClient.v1.tweet(message).then((response) => {
        console.log(response);
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = {Tweet}; 