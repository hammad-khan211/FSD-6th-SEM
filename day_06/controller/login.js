import {readFile} from "../utils/readFile.js";
const FILE = "../user.json";
const userLogin = async(userDetail) => {
    const { email , password } = userDetail;
    const users = await readFile(FILE);
    let response = {
        status : false,
        message : ""
    };
    if(users.length === 0){
        response.status = false;
        response.message = "Use does not exist";
        return response;
    }

    const user = users.find((u) => u.email===email);
    
    if(!user){
        response.status = false;
        response.message = "User does not exist";
        return response;
    }
    if (user.password === password) {
    response.status = true;
    response.message = "Login Successful";
    } else {
    response.status = false;
    response.message = "Incorrect Password";
    }

  return response;

};

userLogin({
  email: "ahmadhammadkhan21112005@gmail.com",
  password: "hammad@2203"
}).then((response) => console.log(response));
