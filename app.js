import userRouter from "./src/route/userRoute.js";

import express from "express";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", userRouter);

export default app;
