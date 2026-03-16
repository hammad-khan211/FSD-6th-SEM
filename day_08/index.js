import http from "http";
import { userLogin } from "../day_06/controller/login";

const PORT = 8800;

const server = http.createServer((req, res) => {
    if(req.url === "/favicon.ico") return;
    if(req.url === "/login" && req.method === "POST"){
        let body = "";
        req.on("data" , (dataChunk) => {
            body += dataChunk.toString();
        })
        req.on("end" , async() => {
            const userData = JSON.parse(body);
            const response = await userLogin(userData , "./user.json");
            res.writeHead(200 , {"content-type":"application/json"});
            res.end(JSON.stringify(response));
        })
        }
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});