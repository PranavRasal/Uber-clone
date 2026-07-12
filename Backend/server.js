import app from "./app.js";
import http from "http";
import connectDB from "./db/index.js";

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

connectDB();

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});