import { readFile } from "../utils/readFile.js";
import { writeFile } from "../utils/writeFile.js";

const FILE = "../user.json";

const register = async (users , userDetails) => {
    const updatedUser = [...users , userDetails];
    const response = await writeFile(FILE , updatedUser);
    return response;
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

    const response = await register(users , userDetails);
    return response.status === 201 ?
    {message : "User has registered successfully" , status : 200} :
    {message : "Unable to register user" , status : 500}

}

userRegistration({
    "name": "Aryan Gupta",
    "email" : "aryangupta@gmail.com",
    "password" : "ari66",
    "gender" : "Male"
}).then((response) => console.log(response));
