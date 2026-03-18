import fs from "fs/promises";

export const readFile = async (FILE) => {
    try {
        const data = await fs.readFile(FILE, "utf-8"); 
        return JSON.parse(data);
    } catch (error) {
        console.log("Some error occured while reading the data"); 
    }
};

export const writeFile = async (data, FILE) => {
    try {
        await fs.writeFile(FILE, JSON.stringify(data, null, 2)); 
        return { message: "User registered successfully" };
    } catch (error) {
        console.log("Error while writing file");
    }
};