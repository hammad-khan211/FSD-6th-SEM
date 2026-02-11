import fs from "fs/promises";
const writeFile = async(path,data) => {
    try {
        await fs.writeFile(path,data);
        console.log("Data has been written successfully");
    } catch (error) {
        console.log("Some error occured during write operation"); 
    }
}

const readFile = async(path) => {
    try {
        await fs.readFile(path);
        const data = await fs.readFile(path,"utf-8");
        console.log(data);
        
    } catch (error) {
        console.log("Some error occured ");
        
    }
}

const appendFile = async(path , data) => {
    try {
        await fs.appendFile(path,data);
        console.log("Data has been appended successfully");
    } catch (error) {
        console.log("Some error occured while appending the data");
        
    }
}

writeFile("./example.txt","Hello everyone, ");
appendFile("./example.txt","I am studying Node.js right now");
readFile("./example.txt");