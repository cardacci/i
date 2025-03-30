import React from 'react';

const Footer: React.FC = () => {
	return (
		<footer>
			<p>&copy; {new Date().getFullYear()} Gabriel Cardacci. Todos los derechos reservados.</p>
		</footer>
	);
};

export default Footer;
