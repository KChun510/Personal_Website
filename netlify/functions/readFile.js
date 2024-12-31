// netlify/functions/getData.js
const fs = require('fs');
const path = require('path');


const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
exports.handler = async () => {
	delay(2000)

	try {
		// Resolve path to the JSON file (make sure to adjust the path to your actual file)
		const filePath = path.join(process.cwd(), 'data', 'gitQueryLog.json');
		const fileContents = fs.readFileSync(filePath, 'utf8');
		const jsonData = JSON.parse(fileContents);

		// Return the JSON data as response
		return {
			statusCode: 200,
			body: JSON.stringify(jsonData),
		};
	} catch (error) {
		console.error("Error reading file:", error);
		return {
			statusCode: 500,
			body: JSON.stringify({ error: "Failed to read JSON file." + error }),
		};
	}
};

