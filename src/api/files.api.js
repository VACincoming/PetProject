import makeRequest from './makeRequest';

const apiUrl = `${process.env.REACT_APP_API_URL}`

const uploadFilesApi = (data) => {
    return makeRequest({
        method: 'POST',
        url: `${apiUrl}/file/multiple`,
        headers: {
            'Content-Type': 'application/json'
        },
        data
    })
};

export {
    uploadFilesApi
}
