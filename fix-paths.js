import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { globSync } from 'glob';

// Obtener el directorio actual (compatible con ES modules).
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Función para corregir rutas en un archivo
function fixPathsInFile(filePath) {
	let content = fs.readFileSync(filePath, 'utf8');

	// Reemplazar rutas absolutas con relativas.
	content = content.replace(/src="\/i\//g, 'src="./');
	content = content.replace(/href="\/i\//g, 'href="./');

	// Asegurar que todas las rutas absolutas que comienzan con / sean relativas.
	content = content.replace(/src="\//g, 'src="./');
	content = content.replace(/href="\//g, 'href="./');

	fs.writeFileSync(filePath, content);
	console.log(`✅ Rutas corregidas en ${path.basename(filePath)}`);
}

// Buscar todos los archivos HTML en dist.
const htmlFiles = globSync(path.join(__dirname, 'dist', '**/*.html'));

// Corregir rutas en cada archivo HTML.
htmlFiles.forEach(fixPathsInFile);

console.log('📝 Todas las rutas han sido corregidas para el despliegue en GitHub Pages.');
