import { readFile } from "../utils/readFile.js";
import { writeFile } from "../utils/writeFile.js";

const FILE = "../user.json";

const register = async (users , userDetails) => {
    const updatedUser = [...users , userDetails];
    const response = await writeFile(FILE , updatedUser);
    console.log(response.message);
    return;
}

const userRegistration = async ( userDetails ) => {
    const { name , email , password , gender } = userDetails;
    if(!name || !email || !password || !gender)
    {
        console.log("User details are not complete , unable to register !");
        return;
    }
    const users = await readFile(FILE);
    if(users.length === 0)
    {
        register(users , userDetails);
    }

    const existingUser = users.find((u) => u.email === email);
    if(existingUser)
    {
        console.log("The provided email is already registered with another account");
        return;
    }

    register(users , userDetails);
}

userRegistration({
    "name": "Ahmad Hamza",
    "email" : "ahmadhamzakhanr8@gmail.com",
    "password" : "hamza@123",
    "gender" : "Male"
})
