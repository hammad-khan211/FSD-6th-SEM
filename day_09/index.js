import http from "http";
import { register } from "./register.js";

const PORT = 8600;
const FILE = "./user.json";

const server = http.createServer((req, res) => {
    if (req.url === "/register" && req.method === "POST") {

        let body = "";

        req.on("data", (dataChunk) => {
            body += dataChunk.toString();
        });

        req.on("end", async () => {
            try {
                const userDetails = JSON.parse(body);

                const response = await register(userDetails, FILE);

                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify(response));

            } catch (error) {
                res.writeHead(400);
                res.end("Invalid JSON");
            }
        });
    }
});

server.listen(PORT, () =>
    console.log(`server is running on ${PORT}`)
);