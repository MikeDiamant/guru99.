console.log(__filename);
console.log(__dirname);
var url ='http://logger.io/log';


function log(message){
    //http request
console.log(message);
}

//module.exports.log = log; //just a functiomn
module.exports = log;
//module.exports.endPoint = url;



