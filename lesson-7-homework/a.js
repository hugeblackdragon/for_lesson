const http = require("http")
const host = "127.0.0.1";
const port = 8080
const server = http.createServer();
const fs = require("fs")

server.on("request", (requstMsg, respone) => {
    if (requstMsg.url === "/") {
        respone.writeHead(200, "OK", {"Content-Type": "text/html; charset=utf-8"});
        respone.write("fafa");
        respone.end("请求根路径");
    } else if (requstMsg.url === "/img") {
        
        respone.writeHead(200,"OK",{
            "Content-Type":"image/jpeg",
            "Cache-Control":"max-age=5"
        })
        respone.write("img")
        respone.end("请求根路径");
    }
    else if (requstMsg.url === "/png") {
        
        respone.writeHead(200,"OK",{
            "Content-Type": "text/html; charset=utf-8",
            "Cache-Control":"no-cache"
        })
        respone.write("png")
        respone.end("请求根路径");
    }
    else if (requstMsg.url === "/mp3") {
        
        respone.writeHead(200,"OK",{
            "Content-Type": "text/html; charset=utf-8",
            "Cache-Control":"no-store"
        })
        respone.write("mp3")
        respone.end("请求根路径");
    }

})
server.listen(port, host, () => {
    console.log("服务启动了")
}
)