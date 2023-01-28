import express from "express";
import dotenv from "dotenv";
import pickupRouter from "./routes/pickup.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
	return res.status(200).json({ message: "Laundry APP is running!!!" });
});

app.use("/api/", pickupRouter);

app.listen(port, () => {
	console.log(`Laundry APP is listening on http://localhost:${port}`);
});
