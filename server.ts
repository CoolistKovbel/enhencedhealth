const { createServer, IncomingMessage, ServerResponse } = require("http");
const next = require("next");
const { Server } = require("socket.io");

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = process.env.PORT || 3000;
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer((req, res) => {
    return handler(req, res);
  });

  const io = new Server(httpServer);

  io.on("connection", (socket) => {
    console.log("a user connected");

    socket.on("joinRoom", (roomId) => {
      socket.join(roomId);
      console.log(`User joined room: ${roomId}`);
    });

    socket.on("message", ({ roomId, message }) => {
      console.log("message:", message);
      io.to(roomId).emit("message", message);
    });

    socket.on("newEvent", (data) => {
      console.log("newEvent received:", data);
      io.emit("newEvent", data);
    });

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });

  httpServer.once("error", (err) => {
    console.error(err);
    process.exit(1);
  });

  httpServer.listen(port, () => {
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
