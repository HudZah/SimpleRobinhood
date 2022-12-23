const express = require("express");

const app = express();

const port = 3001;

app.get("/tickers", (req, res) => {
	// Forward the request to the SimDAQ API
	fetch("http://localhost:3002/tickers")
		.then((response) => response.json())
		.then((tickers) => res.send(tickers))
		.catch((error) => console.error(error));
});

module.exports = app;
