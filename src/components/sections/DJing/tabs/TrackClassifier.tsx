import React, { useState, useEffect } from 'react';

import { ContentCard, SectionTitle } from '@/utils';

const TrackClassifier: React.FC = () => {
	/* ===== State ===== */
	const [componentSelections, setComponentSelections] = useState<string[]>([]);
	const [result, setResult] = useState<string>('');
	const [timeSelections, setTimeSelections] = useState<string[]>([]);
	const [validationError, setValidationError] = useState<string>('');

	/* ===== Constants & Variables ===== */
	const componentOptions = ['Acid', 'Dark', 'Ethereal', 'Funky', 'Groovy', 'Light', 'Melodic', 'Oriental', 'Soft', 'Tribal', 'Vocal'];
	const setTimeOptions = ['Intro', 'Intro-Outro', 'Warm-up', 'Build-up', 'Peak-time', 'Outro'];

	const handleClear = () => {
		setTimeSelections([]);
		setComponentSelections([]);
		setValidationError('');
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

	const handleCopy = () => {
		if (timeSelections.length === 0) {
			setValidationError('Please select at least one Set Time option.');
			return;
		}
		navigator.clipboard.writeText(result).then(
			() => {
				setValidationError('');
			},
			(err) => {
				console.error('Could not copy text: ', err);
				setValidationError('Failed to copy text to clipboard.');
			}
		);
	};

	const handleTimeChange = (option: string) => {
		setTimeSelections((prev) => {
			if (prev.includes(option)) {
				return prev.filter((item) => item !== option);
			} else {
				return [...prev, option];
			}
		});
	};

	/* ===== Effects ===== */
	useEffect(() => {
		const orderedResults: string[] = [];
		setTimeOptions.forEach((option) => {
			if (timeSelections.includes(option)) {
				orderedResults.push(option);
			}
		});
		componentOptions.forEach((option) => {
			if (componentSelections.includes(option)) {
				orderedResults.push(option);
			}
		});
		setResult(orderedResults.join(' / '));
		if (timeSelections.length > 0) {
			setValidationError('');
		}
	}, [componentOptions, componentSelections, setTimeOptions, timeSelections]);

	const Checkbox = ({ id, label, checked, onChange }: { id: string; label: string; checked: boolean; onChange: () => void }) => (
		<div className='flex items-center bg-white rounded-lg shadow-xs border border-gray-200 px-4 py-2 m-1'>
			<input
				checked={checked}
				className='h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-sm'
				id={id}
				onChange={onChange}
				type='checkbox'
			/>
			<label className='ml-2 block text-sm text-gray-700 font-medium cursor-pointer' htmlFor={id}>
				{label}
			</label>
		</div>
	);

	return (
		<ContentCard>
			<SectionTitle className='text-blue-800 mb-6' level='h2'>
				DJ Track Tagging Tool
			</SectionTitle>

			<div className='mb-8'>
				<SectionTitle level='h3'>Set Time</SectionTitle>
				<div className='flex flex-wrap -m-1'>
					{setTimeOptions.map((option) => (
						<Checkbox checked={timeSelections.includes(option)} id={option} key={option} label={option} onChange={() => handleTimeChange(option)} />
					))}
				</div>
			</div>

			<div className='mb-8'>
				<SectionTitle level='h3'>Components</SectionTitle>
				<div className='flex flex-wrap -m-1'>
					{componentOptions.map((option) => (
						<Checkbox
							checked={componentSelections.includes(option)}
							id={option}
							key={option}
							label={option}
							onChange={() => handleComponentChange(option)}
						/>
					))}
				</div>
			</div>

			{validationError && <div className='mb-4 p-3 border border-red-300 bg-red-50 text-red-700 rounded-md'>{validationError}</div>}

			<div className='mb-6'>
				<textarea
					className='w-full p-3 border border-gray-300 rounded-md shadow-xs focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-gray-700'
					id='result'
					placeholder='Selected tags will appear here...'
					readOnly
					rows={3}
					value={result}
				/>
			</div>

			<div className='flex justify-end space-x-4'>
				<button
					className={`px-6 py-2 ${
						timeSelections.length > 0 ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-400 cursor-not-allowed'
					} text-white rounded-md focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150`}
					onClick={handleCopy}
				>
					Copy
				</button>

				<button
					className='px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-hidden focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-150'
					onClick={handleClear}
				>
					Clear
				</button>
			</div>
		</ContentCard>
	);
};

export default TrackClassifier;
