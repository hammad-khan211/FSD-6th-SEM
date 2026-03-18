import { readFile, writeFile } from "./helper.js";

export const register = async (userDetails, FILE) => {
    const { name, email, password, gender } = userDetails;

    if (!name || !email || !password || !gender) {
        return { message: "All fields are required" };
    }

    let users = await readFile(FILE) || [];

    const user = users.find((u) => u.email === email);
    if (user) {
        return { message: "User already registered" };
    }

    users.push(userDetails);

    const response = await writeFile(users, FILE);
    return response;
};