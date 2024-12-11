import dotenv from "dotenv";
import { server } from "./app.js";

dotenv.config({
    path: "./env",
});

server.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running at PORT: ${process.env.PORT || 8000}`);
});