const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
	try {
		const data = JSON.parse(event.body); // Parse incoming JSON data
		const filePath = require.resolve('./data/gitQueryLog.json')

		// Ensure the public directory exists (if not, create it)
		const dirPath = path.dirname(filePath);
		if (!fs.existsSync(dirPath)) {
			fs.mkdirSync(dirPath, { recursive: true }); // Create directory if it doesn't exist
		}

		// Write the JSON data to the file
		fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

		return {
			statusCode: 200,
			body: JSON.stringify({ message: 'Serverless F(n) available' }),
		};
	} catch (error) {
		return {
			statusCode: 200,
			body: JSON.stringify({ message: 'Serverless F(n) unavaible' }),
		};
	}
};

