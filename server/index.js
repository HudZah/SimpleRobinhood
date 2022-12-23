const simdaq = require("./simdaq");
const api = require("./api");

// Start SimDAQ API
simdaq.listen(3002, () => {
	console.log("SimDAQ API listening on port 30002");
});

// Start intermediate API
api.listen(3001, () => {
	console.log("Intermediate API listening on port 3001");
});
