var talib = require("./node_modules/talib/build/Release/talib");
var fs = require("fs");
var path = require('path');

// Display module version
console.log();
console.log("TALib Version: " + talib.version);

// Load market data
var marketContents = fs.readFileSync(path.resolve(__dirname,'marketdata.json'),'utf8'); 
var marketData = JSON.parse(marketContents);

// execute ADX indicator function with time period 9
talib.execute({
    name: "ADX",
    startIdx: 0,
    endIdx: marketData.close.length - 1,
    high: marketData.high,
    low: marketData.low,
    close: marketData.close,
    optInTimePeriod: 9
}, function (result) {

    // Show the result array
    console.log("ADX Function Results:");
    console.log(result);

});
console.log("running ADX");
