import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();


const allowedOrigins = process.env.CORS_ORIGIN.split(",");  // split the string by comma and store in array

app.use(
    cors({
        origin: allowedOrigins, // only the url of cors origin is allowed and pass allowedOrigins
        credentials: true,
    })
);

app.use(express.json({ limit: "16kb" })); // cann remove limit. set this only when limiting json.
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // allows to receive data from url by encoding special characters.
app.use(express.static("public")); // allows to store static data received from frontend into public.

app.use(cookieParser()); // allows to access cookies of browser as well set the cookies.





export {app};
