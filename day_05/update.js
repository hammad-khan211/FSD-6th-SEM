import { readFile, writeFile } from "../day_04/readAndwriteFile.js";

const file = "../day_04/students.json";

const updateFileData = async (id, data) => {
    const students = await readFile(file);
    
    if (!students) {
        console.log("User does not exist !");
        return;
    }

    const filteredData = students.map((student) =>
        student.id === id ? { ...student, ...data } : student
    );

    console.log(filteredData);

    await writeFile(file, filteredData);
};
updateFileData(12,{first_name: 'ABC' , last_name: 'XYZ'});

