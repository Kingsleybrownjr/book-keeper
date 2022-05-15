import {
	fetchBookmarksFromLocalStorage,
	renderBookmarksToDOM,
	submitBookmark,
} from './js/bookmarks.js';
import { showModal, closeModal } from './js/modal.js';

const modal = document.getElementById('modal');
const modalShow = document.getElementById('show-modal');
const modalClose = document.getElementById('close-modal');
const modalSaveBtn = document.getElementById('save-btn');
const bookmarkForm = document.getElementById('bookmark-form');

// Modal Event listerners
modalShow.addEventListener('click', showModal);
modalClose.addEventListener('click', () => modal.classList.remove('show-modal'));
modalSaveBtn.addEventListener('click', closeModal);
window.addEventListener('click', e => e.target === modal ? modal.classList.remove('show-modal') : null);

// General Event listeners
bookmarkForm.addEventListener('submit', submitBookmark);
fetchBookmarksFromLocalStorage();
renderBookmarksToDOM();
