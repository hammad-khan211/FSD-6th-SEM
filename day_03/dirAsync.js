import { read } from 'fs';
import fs from 'fs/promises';

const makeDir = async(path) => {
    try {
        await fs.mkdir(path);
        console.log("Directory has been created successfully");
    } catch (error) {
        console.log("Some error occured during mking directory");  
    }
} 

const readDir = async(path) => {
    try {
        await fs.readdir(path);
        console.log("Directory has been read successfully");
    } catch (error) {
        console.log("Some error occured during reading the directory");
    }
}

const remDir = async(path) => {
    try {
        await fs.rmdir(path);
        console.log("Directory has been removed successfully");
    } catch (error) {
        console.log("Some error occured while  removing the dir");
    }
}

makeDir("../day_10");
readDir("./");
remDir("../day_10");