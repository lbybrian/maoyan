const querystring = require("querystring");
const url = require("url");
const str = "http://www.163.com/lala?a=1&b=2&c=3";
//console.log(querystring.parse(url));
//console.log(url.parse(str).pathname)
console.log(url.parse(str).query)
