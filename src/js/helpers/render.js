export const render = {
	show: (el) => el.classList.remove('hide'),
	hide: (el) => el.classList.add('hide'),
	setText: (el, str) => el.textContent = str,
	clear: (clearObject) => {
		for (let key in clearObject) {
			clearObject[key].value = '';
		}
	},
};
