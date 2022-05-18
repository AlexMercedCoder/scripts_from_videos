import MyServer from "./MyServer.js"

const server = new MyServer({PORT: 4444})

server.basiclogs().bodyParsers().routes().cors().listen()