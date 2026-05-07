import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import orderRoutes from "./routes/orderRoutes.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 5000;

app.use(express.json());
app.use(helmet());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["POST", "GET"],
  })
);
app.use("/api", orderRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});