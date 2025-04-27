import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener el directorio actual (compatible con ES modules).
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Ruta al archivo index.html generado
const indexPath = path.resolve(__dirname, 'dist', 'index.html');

// Leer el contenido del archivo.
let content = fs.readFileSync(indexPath, 'utf8');

// Reemplazar las rutas absolutas por rutas relativas.
content = content.replace(/src="\/i\//g, 'src="./');
content = content.replace(/href="\/i\//g, 'href="./');

// Guardar los cambios.
fs.writeFileSync(indexPath, content);

console.log('📝 Las rutas en index.html han sido corregidas.');
