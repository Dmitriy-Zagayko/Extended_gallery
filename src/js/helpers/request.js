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
		e.JSON({ message: 'Something (GET) go wrong.' });
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
		e.JSON({ message: 'Something (POST) go wrong.' });
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
		e.JSON({ message: 'Something (PUT) go wrong.' });
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
		e.JSON({ message: 'Something (DELETE) go wrong.' });
	}
};
