/*var Square = require("./module");
var mySquareObject = new Square(5);

function main () {
    console.log(mySquareObject.getArea());
}
main();*/

var fs = require('fs')
/*function main () {
    var file = "hello.txt";
    fs.appendFileSync(file, "Hello world\n");
}
main();*/


/*function main () {
    fs.writeFile("hello.txt", "Hello world\n", function (err) {
        console.log("fs.writeFile ended");
    });
    console.log("fs.writeFile");
}
main();*/


/*var dummyText = "Apple yep";
function main () {
    fs.writeFileSync("dummytext.txt", dummyText);
    var text = fs.readFileSync("dummytext.txt").toString();
    console.log(dummyText == text);
    console.log(text);
    fs.writeFileSync("undummytext.txt",
        text.replace("Apple", "Microsoft")
    );
}
main();*/


var obj =
{
    "first_name": "Michael",
    "last_name": "Sargsyan",
    "age": 18,
    "tumo_student": true
}
var myJSON = JSON.stringify(obj);
function main () {
    fs.writeFileSync("obj.json", myJSON);
}
main();