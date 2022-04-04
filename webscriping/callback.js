const fs = require("fs");

console.log("this onw is first:");

// let content = fs.readFileSync("file.txt");
// OUTPUT:this onw is first:
// Hii, my name is meet gami. // this is Execute and then after next line execute remaning line.
// ok then by

fs.readFile("file.txt",cd);

function cd(error,data)
{
    if(error){
        console.log(error);
    }
    else{
        console.log(data+"");
    }
}
// console.log(content+" ");

console.log("ok then by")