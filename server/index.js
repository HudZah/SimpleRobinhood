const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/tickers", (req, res) => {
	const tickers = [
		{ id: 0, name: "AAPL", price: 100 },
		{ id: 1, name: "MSFT", price: 200 },
		{ id: 2, name: "GOOG", price: 300 },
		{ id: 3, name: "AMZN", price: 400 },
		{ id: 4, name: "FB", price: 500 },
	];

	res.send(tickers);
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
