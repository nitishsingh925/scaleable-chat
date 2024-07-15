import http from "http";
import SocketService from "./services/socket";
async function inti() {
  const socketServiceInstance = new SocketService();
  const httpServer = http.createServer();
  const PORT = process.env.PORT ? process.env.PORT : 8000;

  httpServer.listen(PORT, () =>
    console.log(`HTTP Server started at PORT ${PORT}`)
  );

  socketServiceInstance.initListener();
}
inti();
