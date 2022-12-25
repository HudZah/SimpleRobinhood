const express = require("express");

const app = express();

let tickers = [
	{ id: 0, name: "AAPL", price: 100, history: [100] },
	{ id: 1, name: "MSFT", price: 200, history: [200] },
	{ id: 2, name: "GOOG", price: 300, history: [300] },
	{ id: 3, name: "AMZN", price: 400, history: [400] },
	{ id: 4, name: "FB", price: 500, history: [500] },
];

// Set interval to update ticker prices and history every second
setInterval(() => {
	tickers = tickers.map((ticker) => {
		const newPrice = (
			ticker.price *
			(1 + (Math.random() - 0.5) * 0.1)
		).toFixed(2);
		var timestamp = new Date().getTime();
		return {
			...ticker,
			price: Number(newPrice),
			history: [...ticker.history, Number(newPrice)],
		};
	});
}, 1000);

app.get("/tickers", (req, res) => {
	res.send(tickers);
});

module.exports = app;
