import fs from "fs/promises";

const readFile = async(path) => {
    try {
        const data = await fs.readFile(path,"utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.log("Some error occured while reading the data");
    }
}

