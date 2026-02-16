import {readFile} from "./readAndWriteFile.js";

const readFileData = async(path) => {
    try {
        const fileData = await readFile(path);
        console.log(fileData);
    } catch (error) {
        console.log("Some error occured");
    }
}
readFileData("./students.json");