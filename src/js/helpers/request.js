export const getRequest = async (url, optionalHeaders = {}) => {
	try {
		const headers = Object.assign({ 'Content-Type': 'application/json' }, optionalHeaders);
		const options = {
			method: 'GET',
			headers: headers
		};
		const answer = await fetch(url, options);
		return answer.json();
	} catch (e) {
		console.log('Something (GET) go wrong.', e);
	}
};

export const postRequest = async (url, body, optionalHeaders = {}) => {
	try {
		const headers = Object.assign({ 'Content-Type': 'application/json' }, optionalHeaders);
		const options = {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(body)
		};
		const answer = await fetch(url, options);
		return answer.json();
	} catch (e) {
		console.log('Something (POST) go wrong.', e);
	}
};

export const putRequest = async (url, body, optionalHeaders = {}) => {
	try {
		const headers = Object.assign({ 'Content-Type': 'application/json' }, optionalHeaders);
		const options = {
			method: 'PUT',
			headers: headers,
			body: JSON.stringify(body)
		};
		const answer = await fetch(url, options);
		return answer.json();
	} catch (e) {
		console.log('Something (PUT) go wrong.', e);
	}
};

export const deleteRequest = async (url, optionalHeaders = {}) => {
	try {
		const headers = Object.assign({ 'Content-Type': 'application/json' }, optionalHeaders);
		const options = {
			method: 'DELETE',
			headers: headers
		};
		const answer = await fetch(url, options);
		return answer.json();
	} catch (e) {
		console.log('Something (DELETE) go wrong.', e);
	}
};
