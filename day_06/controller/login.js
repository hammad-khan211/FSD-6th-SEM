import {readFile} from "../utils/readFile.js";
const FILE = "../user.json";
const userLogin = async(userDetail) => {
    const { email , password } = userDetail;
    const users = await readFile(FILE);
    if(users.length === 0){
        console.log("User does not exist");
        return;
    }

    const user = users.find((u) => u.email===email);
    
    if(!user){
        console.log("user does not exist");
        return;
    }
    (user.password === password ? console.log("Login Successful") : console.log("Incorrect Password"));

}

userLogin({
  email: "mmervyn8@qq.com",
  password: "jV5\\s+Ia/ah"
});
