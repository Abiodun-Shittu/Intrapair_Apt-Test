import express from 'express';
import dotenv from 'dotenv'
dotenv.config()

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

app.get('/', (req, res) => {
	return res.status(200).json({message: "Laundry APP is running!!!"})
})

app.listen(port, () => {
	console.log(`Laundry APP is listening on http://localhost:${port}`);
})