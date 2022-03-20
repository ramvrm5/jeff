import axios from 'axios';
const url = `http://localhost:3200/`

export const bookService = {
    createBook,
    getBookList,
    deleteBook
};

// GET BOOK LIST
function getBookList() {
    return axios({
        method: 'get',
        url: `${url}getBookList`,
    }).then(async function (response) {
        //console.log(response.data.data)
        if (response.data.status === 200) {
            return response.data.data
        } else {
            return response.data.message
        }
    }).catch(function (error) {
        return error
    });
}

// CREATE BOOK
function createBook(datajson) {
    return axios({
        method: 'post',
        url: `${url}createBook`,
        data: datajson,
    }).then(async function (response) {
        //console.log(response.data.data)
        if (response.data.status === 200) {
            return response.data.data
        } else {
            return response.data.message
        }
    }).catch(function (error) {
        return error
    });
}

// DELETE BOOK
function deleteBook(datajson) {
    return axios({
        method: 'post',
        url: `${url}deleteBook`,
        data: datajson,
    }).then(async function (response) {
        //console.log(response.data.data)
        if (response.data.status === 200) {
            return response.data.data
        } else {
            return response.data.message
        }
    }).catch(function (error) {
        return error
    });
}