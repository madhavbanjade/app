import express from "express";
import connectMongoDb from "./database.js";
import userRouter from "./src/Routes/userRouter.js";
import errorMiddleware from "./src/Middleware/errorMiddleware.js";
import cors from "cors";

//make an app to use express
const app = express();
const port = 1001;

//dealing with cors
app.use(cors());
const corsOptions = {
  origin: "https://localhost:5173",
  methods: "POST, GET, PUT PATCH, DELETE, HEAD",
  Credential: true,
};

//Database connection
connectMongoDb();

//middleware to parse JSON request body
app.use(express.json());

//error handler
app.use(errorMiddleware);

//connect routing
app.use("/api", userRouter);

app.listen(port, () => {
  console.log(`App is Running ${port}`);
});
