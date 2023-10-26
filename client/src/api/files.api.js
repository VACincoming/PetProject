import makeRequest from './makeRequest';

const apiUrl = `${process.env.REACT_APP_API_URL}`;

const uploadFilesApi = (data, entityId, type) => makeRequest({
    method: 'POST',
    url: `${apiUrl}/files?entityId=${entityId}&type=${type}`,
    headers: {
        'Content-Type': 'multipart/form-data'
    },
    data
});

export {
    uploadFilesApi
};
