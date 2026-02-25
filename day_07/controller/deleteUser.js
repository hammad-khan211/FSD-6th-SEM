import { readFile } from "../../day_06/utils/readFile.js";
import { writeFile } from "../../day_06/utils/writeFile.js";

const FILE = "../../day_06/user.json";

const deleteFileData = async (email) => {
    try {
        //read users
        const users = await readFile(FILE);

        if (!users || users.length === 0) {
            return { 
                response : {
                    status: 404, message: "No users found" }
                };
        }

        //check user exist
        const userExists = users.find((u) => u.email === email);

        if (!userExists) {
            return {
                response : {
                    status: 404, message: "User not found" }
                };
        }

        //delete user
        const updatedUsers = users.filter((u) => u.email !== email);

        // write back
        await writeFile(FILE, updatedUsers);

        return {
            response : {
                 status: 200, message: "User deleted successfully " }
            };

    } catch (err) {

        return { 
            response : {
                status: 500, message: err.message }
            };
    }
};

deleteFileData("ahmadhammadkhan21112005@gmail.com").then((response) => console.log(response));