import fs from 'fs';
import path from 'path';

const buildDir = 'build';
const basePath = 'idea_buckets';

// Move sveltex from build/sveltex to build/idea_buckets/sveltex
const sveltexSource = path.join(buildDir, 'sveltex');
const sveltexDest = path.join(buildDir, basePath, 'sveltex');

if (fs.existsSync(sveltexSource)) {
	// Create the base path directory if it doesn't exist
	const basePathDir = path.join(buildDir, basePath);
	if (!fs.existsSync(basePathDir)) {
		fs.mkdirSync(basePathDir, { recursive: true });
	}

	// Move the sveltex directory
	fs.renameSync(sveltexSource, sveltexDest);
	console.log(`Moved sveltex to ${sveltexDest}`);
}
