import makeRequest from './makeRequest';

const apiUrl = `${process.env.REACT_APP_API_URL}`

const uploadFilesApi = (data, entityId, type) => {
    return makeRequest({
        method: 'POST',
        url: `${apiUrl}/file/multiple?entityId=${entityId}&type=${type}`,
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data
    })
};

export {
    uploadFilesApi
}
