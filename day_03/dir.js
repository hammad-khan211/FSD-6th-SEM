import fs from 'fs';

const readDir = (path) => {
    try {
        fs.readdirSync(path);
        console.log("Dir has been read successfully using readDir");
    } catch (error) {
        console.log("Some error occured while reading dir");
    }
}

const makeDir = (path) => {
    try {
        fs.mkdirSync(path);
        console.log("Dir has been created successfully using mkDir ");        
    } catch (error) {
        console.log("Some error occured while making dir");
    }
}

const remDir = (path) => {
    try {
        fs.rmdirSync(path);
        console.log("Directory has been removed successfully using rmDir");
        
    } catch (error) {
        console.log("Some error occured while removing the directory");
    }
}

makeDir("../day_05");
readDir("./");
remDir("../day_05");