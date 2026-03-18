import http from "http";

const PORT = 8600;

const server = http.createServer((req, res) => {
    if (req.url == "/register" && req.method === "POST") {

        let body = "";

        req.on("data", (dataChunk) => {
            body += dataChunk.toString();
        });

        req.on("end", () => {
            const userDetails = JSON.parse(body);
            const response = register(userDetails, FILE);

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(response));
        });
    }
});

server.listen(PORT, () => console.log(`server is running on ${PORT}`));