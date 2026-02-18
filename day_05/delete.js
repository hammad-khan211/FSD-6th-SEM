import { readFile, writeFile } from "../day_04/readAndwriteFile.js";

const file = "../day_04/students.json";

const deleteFileData = async (id) => {
    const students = await readFile(file);
    
    if (!students) {
        console.log("User does not exist !");
        return;
    }

    const user = students.filter((student) =>
        student.id === id );
    if(user.length === 0)
    {
        console.log("user is not existing");
    }
    else{
        const filteredData = students.filter((student) => students.id !== id);
        await writeFile(file, filteredData)
    }
};
deleteFileData(11);

