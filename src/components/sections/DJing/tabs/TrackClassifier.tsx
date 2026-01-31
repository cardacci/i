import React, { useState, useEffect } from 'react';

import { SectionTitle } from '@/components/common';

const TrackClassifier: React.FC = () => {
	/* ===== State ===== */
	const [componentSelections, setComponentSelections] = useState<string[]>([]);
	const [result, setResult] = useState<string>('');
	const [timeSelections, setTimeSelections] = useState<string[]>([]);
	const [validationError, setValidationError] = useState<string>('');

	/* ===== Constants & Variables ===== */
	const componentOptions = [
		'Acid',
		'Dark',
		'Ethereal',
		'Funky',
		'Groovy',
		'Light',
		'Melodic',
		'Oriental',
		'Soft',
		'Tribal',
		'Tribute',
		'Vocal'
	];
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
		<div
			className={`cursor-pointer flex items-center rounded-lg border px-4 py-2 m-1 transition-all duration-200 ${
				checked
					? 'bg-[#A3FFD6]/20 border-[#A3FFD6] shadow-md shadow-[#A3FFD6]/20'
					: 'bg-white/5 border-white/20 hover:border-[#A3FFD6]/50 hover:bg-white/10'
			}`}
			onClick={onChange}
		>
			<input
				checked={checked}
				className='h-5 w-5 text-[#A3FFD6] focus:ring-[#A3FFD6] border-gray-500 rounded-sm cursor-default accent-[#A3FFD6]'
				id={id}
				onChange={onChange}
				type='checkbox'
			/>

			<label
				className={`ml-2 block text-sm font-medium cursor-pointer select-none ${checked ? 'text-[#A3FFD6]' : 'text-gray-300'}`}
				htmlFor={id}
			>
				{label}
			</label>
		</div>
	);

	return (
		<div className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-[#A3FFD6]/20'>
			<SectionTitle level='h2'>
				<span className='text-white flex items-center gap-2'>
					<span className='text-2xl'>🏷️</span> DJ Track Tagging Tool
				</span>
			</SectionTitle>

			<p className='mb-6 text-gray-300'>
				This tool helps you standardize your comments and tags for tracks you analyze, making it easier to keep a consistent rating
				and description style across your music collection.
			</p>

			<div className='mb-8'>
				<SectionTitle level='h3'>
					<span className='text-white/90'>Set Time</span>
				</SectionTitle>
				<div className='flex flex-wrap -m-1'>
					{setTimeOptions.map((option) => (
						<Checkbox
							checked={timeSelections.includes(option)}
							id={option}
							key={option}
							label={option}
							onChange={() => handleTimeChange(option)}
						/>
					))}
				</div>
			</div>

			<div className='mb-8'>
				<SectionTitle level='h3'>
					<span className='text-white/90'>Components</span>
				</SectionTitle>
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

			{validationError && (
				<div className='mb-4 p-3 border border-red-400/50 bg-red-500/20 text-red-300 rounded-lg backdrop-blur-sm'>
					{validationError}
				</div>
			)}

			<div className='mb-6'>
				<textarea
					className='w-full p-4 bg-[#0f0f1a] border border-[#A3FFD6]/30 rounded-lg shadow-inner focus:ring-[#A3FFD6] focus:border-[#A3FFD6] text-white placeholder-gray-500'
					id='result'
					placeholder='Selected tags will appear here...'
					readOnly
					rows={3}
					value={result}
				/>
			</div>

			<div className='flex justify-end space-x-4'>
				<button
					className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
						timeSelections.length > 0
							? 'bg-gradient-to-r from-[#A3FFD6] to-[#7de8b8] text-[#0f0f1a] hover:shadow-lg hover:shadow-[#A3FFD6]/30 hover:scale-105'
							: 'bg-gray-700 text-gray-400 cursor-not-allowed'
					}`}
					onClick={handleCopy}
				>
					Copy Tags
				</button>

				<button
					className='px-6 py-2.5 bg-white/10 text-gray-300 rounded-full font-semibold border border-white/20 hover:bg-white/20 hover:text-white transition-all duration-300'
					onClick={handleClear}
				>
					Clear
				</button>
			</div>
		</div>
	);
};

export default TrackClassifier;
