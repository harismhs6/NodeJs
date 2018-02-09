var fs = require("fs");

 console.log("Read file sync");
 read_using_sync();
 console.log("Read file non blocking");
 read_non_blocking();


function read_using_sync()
{
		var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Program Ended");
}

function read_non_blocking()
{
		fs.readFile('input.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("Program Ended");
}