import "./App.css";
import React, { useState, useEffect } from "react";
import Graph from "./Graph.js";

function App() {
	const AAPL = "AAPL";

	const [tickersData, setTickersData] = useState([]);
	const [stock, setStock] = useState(AAPL);

	useEffect(() => {
		async function getTickersData() {
			// Send GET request to the "tickers" endpoint on the Robinhood API
			try {
				const response = await fetch("/tickers");
				const data = await response.json();
				setTickersData(data);
			} catch (error) {
				console.log(error);
			}
		}

		// Send the GET request every one second.
		const interval = setInterval(() => {
			getTickersData();
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	let currentStock = tickersData.find((ticker) => ticker.name === stock);

	return (
		<div className="App">
			<div className="header">
				<div className="header-text">Simple Robinhood</div>
			</div>
			<div className="container">
				<div className="graph">
					{currentStock && currentStock.history.length > 0 ? (
						<Graph
							priceData={currentStock.history}
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
