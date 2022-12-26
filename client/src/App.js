import "./App.css";
import React, { useState, useEffect, useMemo } from "react";
import Graph from "./Graph.js";

function App() {
	const AAPL = "AAPL";
	const INTERVAL = 1000; // 1 second

	const [tickersData, setTickersData] = useState([]);
	const [stock, setStock] = useState(AAPL);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function getTickersData() {
			// Send GET request to the "tickers" endpoint on the Robinhood API
			try {
				const response = await fetch("/tickers");
				const data = await response.json();
				setTickersData(data);
			} catch (error) {
				setError(error);
			}
		}

		// Send the GET request every one second.
		const interval = setInterval(() => {
			getTickersData();
		}, INTERVAL);

		return () => clearInterval(interval);
	}, []);

	// Memoize currentStock to avoid unnecessary re-renders
	const currentStock = useMemo(
		() => tickersData.find((ticker) => ticker.name === stock),
		[tickersData, stock]
	);

	return (
		<div className="App">
			<div className="header">
				<div className="header-text">Simple Robinhood</div>
			</div>
			<div className="container">
				<div className="graph">
					{error ? (
						<div>{error.message}</div>
					) : currentStock && currentStock.history.length > 0 ? (
						<Graph
							priceData={currentStock.history.slice(-1000)}
							stock={stock}
						></Graph>
					) : (
						<div>Loading...</div>
					)}
				</div>
				<div className="tickers-div">
					<nav className="ticker-nav">
						{tickersData.map((ticker) => (
							<button
								key={ticker.id}
								className="ticker-button"
								onClick={() => setStock(ticker.name)}
							>
								{ticker.name}
							</button>
						))}
					</nav>
				</div>
			</div>
		</div>
	);
}

export default App;
