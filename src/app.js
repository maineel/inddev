import express from "express";
import cors from "cors";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN || "*", credentials: true }));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Nodejs Express API",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:8000",
      },
    ],
  },
  apis: ['src/models/*.js', 'src/routes/*.js'],
};

const specs = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to inddev server." });
});

import { userRouter } from "./routes/user.routes.js";
app.use("/api/users", userRouter);

export { app };
