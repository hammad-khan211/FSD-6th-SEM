import http from "http";

const PORT = 8800;

const server = http.createServer((req, res) => {
    switch(req.url){
        case "/" :
            res.end("Home Page");
            break;
        case "/login" :
            res.end("Login Page");
            break;
        case "/register" :
            res.end("Register Page");
            break;
        default : 
            res.end("Incorrect Path");
    }
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});