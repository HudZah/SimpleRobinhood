const express = require("express");

const app = express();

const port = 3001;

app.get("/tickers", (req, res) => {
	// Forward the request to the SimDAQ API
	async function getTickers() {
		const response = await fetch("http://localhost:3002/tickers");
		const data = await response.json();
		res.send(data);
	}

	getTickers();
});

module.exports = app;
