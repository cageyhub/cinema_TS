const options = {
	credentials: 'include',
};

export const handleResponse = async (response: any) => {
	const responseJSON = await response.json();
	if (response.ok) { return responseJSON; }
	return Promise.reject(responseJSON.message);
};

export const makeFetchRequest = async (url:any, bodyOptions:any, callback:any) => {
	const response = await fetch(url, bodyOptions);
	return callback(response);
};

export const createBodyRequest = (method: any, bodyData: any) => {
	const body: any = {
		headers: new Headers({
			'Content-Type': 'application/json',
		}),
		method,
	};
	if (bodyData) { body.body = JSON.stringify(bodyData); }
	return body;
};

export const createBodyRequestWithCredentials = (method: any, bodyData: any) => {
	const bodyRequest: any = createBodyRequest(method, bodyData);
	bodyRequest.credentials = 'include';
	return bodyRequest;
};

export const makePostRequest = async (url: any, bodyData: any, callback: any) => {
	const bodyRequest = createBodyRequestWithCredentials("POST", bodyData);
	return await makeFetchRequest(url, bodyRequest, callback);
};

export const makeGetRequest = async (url: any, callback: any) => await makeFetchRequest(url, options, callback);