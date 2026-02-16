import fs from "fs/promises";
import {readFile} from "./readAndWriteFile.js";

const readFileData = async(path) => {
    try {
        const fileData = await readFile(path);
        console.log(fileData);
    } catch (error) {
        console.log("Some error occured");
    }
}

const writeFileData = async (path , data) => {
    try {
        const fileData = await readFile(path);
        fileData.push(data);
        await fs.writeFile(path , JSON.stringify(fileData , null , 2) , "utf-8");
        console.log("Student added successfully");
    } catch (error) {
        console.log("Some error occured during writing");
    }
}
readFileData("./students.json");
writeFileData("./students.json" , {
    id: 13,
    first_name: "Inshu",
    last_name: "Pervez",
    email: "inshu@utexas.edu",
    gender: "female",
    ip_address: "1.21.96.120"
});