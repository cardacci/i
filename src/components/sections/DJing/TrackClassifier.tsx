import React, { useState, useEffect } from 'react';

const TrackClassifier: React.FC = () => {
	// State to track selected checkboxes.
	const [timeSelections, setTimeSelections] = useState<string[]>([]);
	const [componentSelections, setComponentSelections] = useState<string[]>([]);
	const [result, setResult] = useState<string>('');

	// Define checkbox options.
	const setTimeOptions = ['Intro', 'Intro-Outro', 'Warm-up', 'Build-up', 'Peak-time', 'Outro'];

	const componentOptions = [
		'Acid',
		'Dark',
		'Ethereal',
		'Light',
		'Melodic',
		'Oriental',
		'Soft',
		'Tribal',
		'Vocal',
	];

	// Update result whenever selections change.
	useEffect(() => {
		const allSelected = [...timeSelections, ...componentSelections];
		const uniqueSelected = [...new Set(allSelected)];
		setResult(uniqueSelected.join(' / '));
	}, [timeSelections, componentSelections]);

	// Handle checkbox changes.
	const handleTimeChange = (option: string) => {
		setTimeSelections((prev) => {
			if (prev.includes(option)) {
				return prev.filter((item) => item !== option);
			} else {
				return [...prev, option];
			}
		});
	};

	const handleComponentChange = (option: string) => {
		setComponentSelections((prev) => {
			if (prev.includes(option)) {
				return prev.filter((item) => item !== option);
			} else {
				return [...prev, option];
			}
		});
	};

	// Copy and Clear functions.
	const handleCopy = () => {
		navigator.clipboard.writeText(result).then(
			() => {
				// Could add a toast/notification here.
			},
			(err) => {
				console.error('Could not copy text: ', err);
			}
		);
	};

	const handleClear = () => {
		setTimeSelections([]);
		setComponentSelections([]);
	};

	// Checkbox component for consistent styling.
	const Checkbox = ({
		id,
		label,
		checked,
		onChange,
	}: {
		id: string;
		label: string;
		checked: boolean;
		onChange: () => void;
	}) => (
		<div className="flex items-center bg-white rounded-lg shadow-sm border border-gray-200 px-4 py-2 m-1">
			<input
				id={id}
				type="checkbox"
				checked={checked}
				onChange={onChange}
				className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
			/>
			<label
				htmlFor={id}
				className="ml-2 block text-sm text-gray-700 font-medium cursor-pointer"
			>
				{label}
			</label>
		</div>
	);

	return (
		<div className="bg-white p-6 rounded-lg shadow-md">
			<h2 className="text-2xl font-bold text-blue-800 mb-6">DJ Track Tagging Tool</h2>

			<div className="mb-8">
				<h3 className="text-xl font-semibold text-gray-800 mb-4">Set Time</h3>
				<div className="flex flex-wrap -m-1">
					{setTimeOptions.map((option) => (
						<Checkbox
							key={option}
							id={option}
							label={option}
							checked={timeSelections.includes(option)}
							onChange={() => handleTimeChange(option)}
						/>
					))}
				</div>
			</div>

			<div className="mb-8">
				<h3 className="text-xl font-semibold text-gray-800 mb-4">Components</h3>
				<div className="flex flex-wrap -m-1">
					{componentOptions.map((option) => (
						<Checkbox
							key={option}
							id={option}
							label={option}
							checked={componentSelections.includes(option)}
							onChange={() => handleComponentChange(option)}
						/>
					))}
				</div>
			</div>

			<div className="mb-6">
				<textarea
					id="result"
					value={result}
					readOnly
					className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-gray-700"
					rows={3}
					placeholder="Selected tags will appear here..."
				/>
			</div>

			<div className="flex justify-end space-x-4">
				<button
					onClick={handleCopy}
					className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150"
				>
					Copy
				</button>
				<button
					onClick={handleClear}
					className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-150"
				>
					Clear
				</button>
			</div>

			<div className="mt-12 pt-8 border-t border-gray-200">
				<h3 className="text-lg font-semibold text-gray-800 mb-4">Follow me on</h3>
				<div className="flex flex-wrap items-center gap-4">
					<a
						href="https://www.youtube.com/@CARDACCI"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors"
					>
						<svg
							className="w-5 h-5"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
						>
							<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
						</svg>
						YouTube
					</a>

					<a
						href="https://www.mixcloud.com/CARDACCI/"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 px-4 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700 transition-colors"
					>
						<span className="font-bold">MC</span>
						Mixcloud
					</a>

					<a
						href="https://soundcloud.com/cardacci"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 px-4 py-2 rounded-md bg-orange-500 text-white hover:bg-orange-600 transition-colors"
					>
						<span className="font-bold">SC</span>
						SoundCloud
					</a>
				</div>
			</div>
		</div>
	);
};

export default TrackClassifier;
