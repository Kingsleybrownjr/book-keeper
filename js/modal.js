const websiteNameEl = document.getElementById('website-name');
const websiteUrlEl = document.getElementById('website-url');

// Show Modal, Focus on Input
export const showModal = () => {
	modal.classList.add('show-modal');
	websiteNameEl.focus();
};

export const closeModal = () => {
	if (!websiteNameEl.value || !websiteUrlEl.value) {
		return showModal();
	} else {
		modal.classList.remove('show-modal');
	}
};
