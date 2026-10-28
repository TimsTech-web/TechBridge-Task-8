const express = require('express');
const fs = require('node:fs/promises');
const path = require('node:path');

const app = express();
const port = process.env.PORT || 3000;
const tasksPath = path.join(__dirname, 'tasks.json');

app.use(express.json());
app.use((request, response, next) => {
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
	response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

	if (request.method === 'OPTIONS') {
		return response.sendStatus(204);
	}

	next();
});

app.get('/api/tasks', async (request, response) => {
	try {
		const file = await fs.readFile(tasksPath, 'utf8');
		const tasks = JSON.parse(file);
		const track = request.query.track;

		if (track && !Object.hasOwn(tasks, track)) {
			return response.status(404).json({ error: 'Track not found.' });
		}

		response.json(track ? tasks[track] : tasks);
	} catch (error) {
		console.error('Unable to read tasks.json:', error);
		response.status(500).json({ error: 'Unable to load tasks.' });
	}
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
	console.log(`Task API listening on http://localhost:${port}`);
});
