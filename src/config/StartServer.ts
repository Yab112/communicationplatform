import { Application } from "express";
import http from "http";
import { Server } from "socket.io";
import { env } from "./env";

export const startServer = (app: Application, port: number) => {
  console.log("Starting server...");

  // Create HTTP server (for WebSockets support)
  const server = http.createServer(app);

  // Initialize Socket.io
  const io = new Server(server, {
    cors: {
      origin: "*", 
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log(`⚡ User connected: ${socket.id}`);

    // Handle joining a private chat
    socket.on("joinChat", (chatId) => {
      socket.join(chatId);
      console.log(`User joined chat: ${chatId}`);
    });

    // Handle one-to-one messages
    socket.on("sendMessage", ({ chatId, senderId, message }) => {
      io.to(chatId).emit("receiveMessage", { senderId, message });
    });

    // Handle joining a group chat room
    socket.on("joinRoom", (roomId) => {
      socket.join(roomId);
      console.log(`User joined room: ${roomId}`);
    });

    // Handle group chat messages
    socket.on("sendGroupMessage", ({ roomId, senderId, message }) => {
      io.to(roomId).emit("receiveGroupMessage", { senderId, message });
    });

    // Handle disconnection
    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });

  // Start the server
  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};
