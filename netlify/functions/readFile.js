// netlify/functions/getData.js
const fs = require('fs');
const path = require('path');


exports.handler = async () => {
	try {
		const filePath = fs.readFileSync(require.resolve('./data/gitQueryLog.json'));

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

