import fs from 'fs';

//read sync
const readFileSync = (path) => {
    try {
        fs.readFileSync(path);
        console.log(path);
    } catch (error) {
        console.log("Unable to read data");
        
    }
}

//write sync 
const writeFileSync = (file,data) => {
try {
    fs.writeFileSync(file,data);
    console.log("File has been written successfully...");
} catch (error) {
    console.log("Some error occured during writing");   
}
}

//append fsync
const appendFileSync = (file,data) => {
    try {
        fs.appendFileSync(file,data);
        console.log("File has been apended successfully...");
    } catch (error) {
        console.log("Some error occured during Appending"); 
    }
}

readFileSync("./example.txt");

writeFileSync("./example.txt" ,
    "this data has been written through sync function of fs module");

appendFileSync("./example.txt",
    "This data has been appended through sync function of fs");