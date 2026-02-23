import fs from "fs/promises";
export const writeFile = async(path , data) => {
    let status = 0;
    let message = "";
    try {
        await fs.writeFile(path , JSON.stringify(data , null , 2));
        status = 201;
        message = "User is registered successfully";
    } catch (error) {
        status = 500;
        message = "Unable to write data";   
    }
    return { status , message};
}