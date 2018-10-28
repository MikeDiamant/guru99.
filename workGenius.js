var request=require('request');
var URL='https://api.genius.com/search?q=Kendrick%20Lamar&access_token=pV-BGKyPxkPStJxwDGQfzXSVZzI_JEjkFkE80LLfnokGe1QBCbz1D4ir9QttkShe'
request(URL, function(error,response,body)
{
    console.log(body);

});

