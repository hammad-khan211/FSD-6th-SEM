import fs from "fs/promises";

const readFile = async(path) => {
    try {
        const data = await fs.readFile(path,"utf-8");
        console.log(data);
    } catch (error) {
        console.log("Some error occured while reading the data");
    }
}

readFile("../user.json");