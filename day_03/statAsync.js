import fs from "fs/promises";

const checkStatus = async (filePath) => {
    try {
        const stats = await fs.stat(filePath);

        console.log("Is File:", stats.isFile());
        console.log("Size:", stats.size);

    } catch (error) {
        console.log("Error:", error.message);
    }
};

checkStatus("./example.txt");
