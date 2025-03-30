import React from 'react';

interface ButtonProps {
	label: string;
	onClick: () => void;
	styleType?: 'primary' | 'secondary' | 'tertiary';
	disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
	label,
	onClick,
	styleType = 'primary',
	disabled = false,
}) => {
	const baseStyle = 'px-4 py-2 rounded focus:outline-none';
	const styleMap = {
		primary: 'bg-blue-500 text-white hover:bg-blue-600',
		secondary: 'bg-gray-500 text-white hover:bg-gray-600',
		tertiary:
			'bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white',
	};

	return (
		<button
			className={`${baseStyle} ${styleMap[styleType]}`}
			onClick={onClick}
			disabled={disabled}
		>
			{label}
		</button>
	);
};

export default Button;
