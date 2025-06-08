import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { globSync } from 'glob';

// Get current directory (ES modules compatible).
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Function to fix paths in a file.
function fixPathsInFile(filePath) {
	let content = fs.readFileSync(filePath, 'utf8');

	// Replace absolute paths with relative ones.
	content = content.replace(/src="\/i\//g, 'src="./');
	content = content.replace(/href="\/i\//g, 'href="./');

	// Ensure all absolute paths starting with / are relative.
	content = content.replace(/src="\//g, 'src="./');
	content = content.replace(/href="\//g, 'href="./');

	fs.writeFileSync(filePath, content);
	console.log(`✅ Paths fixed in ${path.basename(filePath)}`);
}

// Search for all HTML files in dist.
const htmlFiles = globSync(path.join(__dirname, 'dist', '**/*.html'));

// Fix paths in each HTML file.
htmlFiles.forEach(fixPathsInFile);

console.log('📝 All paths have been fixed for GitHub Pages deployment.');
