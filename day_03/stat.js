import fs from 'fs';

const checkStatus = (path) => {
    try {
    const stats = fs.statSync(path);
    console.log("Is File:", stats.isFile());
    console.log("Is Directory:", stats.isDirectory());
    console.log("Size:", stats.size);
    console.log("Created At:", stats.birthtime);        
    
    } catch (error) {
        console.log("some error occured");
    }
}

checkStatus("./example.txt");
