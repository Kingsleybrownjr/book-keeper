export const resetFormToOriginalState = () => {
	const websiteNameEl = document.getElementById('website-name');
	const bookmarkForm = document.getElementById('bookmark-form');

	bookmarkForm.reset();
	websiteNameEl.focus();
};

// Validate Form
export const validateFormEntries = (nameValue, urlValue) => {
	const expression =
		/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;

	const regex = new RegExp(expression);

	if (!nameValue || !urlValue) {
		alert('Please submit values for both fields.');
		return false;
	}

	if (!urlValue.match(regex)) {
		alert('Please provide a valid web address');
		return false;
	}

	// Submit form if fields are valid
	return true;
};
