import http from "http";
import { userLogin } from "../day_06/controller/login.js";
const PORT = 8800;
const server = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") return;

    if (req.url === "/login" && req.method === "POST") {
        let body = "";
        req.on("data", (dataChunk) => {
            body += dataChunk.toString();
        })

        req.on("end", async () => {
            const userData = JSON.parse(body);
            const response = await userLogin(userData, "./user.json");
            res.writeHead(200, { "content-type": "application/json" });
            res.end(JSON.stringify(response));
        })
    } else {
        res.writeHead(500, { "content-type": "application/json" });
        res.end(JSON.stringify({ error: "url is not matched" }));
    }
})
server.listen(PORT,
    () => console.log(`server is running at http://localhost:${PORT}`))