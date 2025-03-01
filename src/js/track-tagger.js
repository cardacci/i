document.addEventListener('DOMContentLoaded', () => {
	const setTimeCheckboxes = document.querySelectorAll('#set-time input[type="checkbox"]');
	const componentsCheckboxes = document.querySelectorAll('#components input[type="checkbox"]');
	const resultTextarea = document.getElementById('result');
	const copyButton = document.getElementById('copy');
	const clearButton = document.getElementById('clear');

	/**
	 * Gets the IDs of all checked checkboxes from a NodeList
	 * 
	 * @param {NodeList} checkboxes - The collection of checkbox elements to process
	 * @returns {string[]} An array of IDs from checked checkboxes
	 */
	function getSelected(checkboxes) {
		let selected = [];

		checkboxes.forEach(checkbox => {
			if (checkbox.checked) {
				selected.push(checkbox.id);
			}
		});

		return selected;
	}

	/**
	 * Updates the result textarea with all selected tags
	 * 
	 * This function collects IDs from both set time and component checkboxes,
	 * removes duplicates, and joins them with a separator to display in the result field
	 */
	function updateResult() {
		let allSelected = [];

		// Collect selected items from both checkbox groups
		allSelected = allSelected.concat(getSelected(setTimeCheckboxes));
		allSelected = allSelected.concat(getSelected(componentsCheckboxes));

		// Remove duplicates using Set
		const uniqueSelected = [...new Set(allSelected)];

		// Join with separator and update the textarea
		resultTextarea.value = uniqueSelected.join(" / ");
	}

	setTimeCheckboxes.forEach(checkbox => {
		checkbox.addEventListener('change', updateResult);
	});

	componentsCheckboxes.forEach(checkbox => {
		checkbox.addEventListener('change', updateResult);
	});

	copyButton.addEventListener('click', () => {
		resultTextarea.select();
		document.execCommand('copy');
		resultTextarea.setSelectionRange(0, 0);
	});

	clearButton.addEventListener('click', () => {
		// Uncheck all checkboxes
		setTimeCheckboxes.forEach(checkbox => checkbox.checked = false);
		componentsCheckboxes.forEach(checkbox => checkbox.checked = false);
		// Clear the textarea
		resultTextarea.value = "";
	});

	updateResult();
});
