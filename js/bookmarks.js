import { validateFormEntries, resetFormToOriginalState } from './form.js';

const websiteNameEl = document.getElementById('website-name');
const websiteUrlEl = document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmarks-container');

let bookmarks = fetchBookmarksFromLocalStorage();

export const renderBookmarksToDOM = () => {
	bookmarksContainer.textContent = '';
	bookmarks.forEach(({ name, url, id }) => {
		const item = document.createElement('div');
		item.classList.add('item');

		const closeIcon = document.createElement('i');
		closeIcon.classList.add('fas', 'fa-times');
		closeIcon.setAttribute('title', 'Delete Bookmark');
		closeIcon.addEventListener('click', e => {
			deleteBookmark(url);
		});

		// Favicon // Link container
		const linkInfo = document.createElement('div');
		linkInfo.classList.add('name');
		const favicon = document.createElement('img');
		favicon.setAttribute(
			'src',
			`https://s2.googleusercontent.com/s2/favicons?domain=${url}`
		);
		favicon.setAttribute('alt', 'Favicon');

		const link = document.createElement('a');
		link.setAttribute('href', `${url}`);
		link.setAttribute('target', '_blank');
		link.textContent = name;
		// Append to bookmarks container
		linkInfo.append(favicon, link);
		item.append(closeIcon, linkInfo);
		bookmarksContainer.appendChild(item);
	});
};

const saveBookmarks = () =>
	localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

const deleteBookmark = url => {
	bookmarks = bookmarks.filter(bookmark => bookmark.url !== url);
	bookmarksContainer.textContent = '';
	saveBookmarks();
	renderBookmarksToDOM();
};

export function fetchBookmarksFromLocalStorage() {
	const storedBookmarks = localStorage.getItem('bookmarks');
	return storedBookmarks ? JSON.parse(storedBookmarks) : [];
}

export const submitBookmark = e => {
	e.preventDefault();

	const websiteNameValue = websiteNameEl.value;
	let websiteUrlValue = websiteUrlEl.value;

	if (
		!websiteUrlValue.includes('https://') &&
		!websiteUrlValue.includes('http://')
	) {
		websiteUrlValue = `https://${websiteUrlValue}`;
	}

	if (!validateFormEntries(websiteNameValue, websiteUrlValue)) return false;

	const bookmark = {
		name: websiteNameValue,
		url: websiteUrlValue,
	};

	bookmarks.push(bookmark);
	saveBookmarks();
	renderBookmarksToDOM();
	resetFormToOriginalState();
};
