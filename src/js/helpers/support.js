import * as constants from './constants';

export const support = {
	redirect: (path) => window.location.pathname = path,
	setCookie: (name, data, hours) => document.cookie = `${name}=${data}; max-age=${hours * hours}`,
	getCookie: (name) => {
		const data = `; ${document.cookie}`;
		const part = data.split(`; ${name}=`);
		if (part.length === constants.GENERALLENGTH) return part.pop().split(';').shift();
	},
	killCookie: (name) => document.cookie = `${name}=;max-age=0`,
	showHidePassword: (element, input) => {
		element.addEventListener('click', () => {
			if (input.getAttribute('type') === 'password') {
				return input.setAttribute('type', 'text');
			}
			if (input.getAttribute('type') === 'text') {
				return input.setAttribute('type', 'password');
			}
		});
	},
};
