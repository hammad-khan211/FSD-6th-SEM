import { readFile } from "../../day_06/utils/readFile.js";
import { writeFile } from "../../day_06/utils/writeFile.js";

const FILE = "../../day_06/user.json";

const updateUsers = async (users , userDetails) => {
    const updatedData = users.map((u) => u.email === userDetails.email ? {...u, ...userDetails} : u);
    const response = await writeFile(FILE , updatedData);
    return response;
}

const changePassword = async (userDetails) => {
    const { email , password } = userDetails;
    if(!email || !password)
    {
        return { message : "All fields required " , status:401};
    }
    const users = await readFile(FILE);
    if(users.length === 0)
    {
        return {message  : "User does not exist" , status :402};
    }
    const existingUser = users.find((u) => u.email === email);
    if(!existingUser)
    {
        return {message  : "User does not exist" , status :402};
    }
    const response = await updateUsers(users , userDetails);
    return response.status === 201 ?
     {message : "Password updated successfully" , status:200} :
     {message : "Unable to update password" , status : 500}
}

changePassword({
    "email" : "adityatayal@gmail.com",
    "password" : "aditayal19"
}).then((response) => console.log(response));
