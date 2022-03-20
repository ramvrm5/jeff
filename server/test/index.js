// Testing the save task expecting status 201 of success
import chai from 'chai';
import supertest from 'supertest';
import app from '../server.js';

let request = supertest(app);

describe('POST /createBook', function () {
    it('saves a new Book', function (done) {
        request.post('/createBook')
            .send({
                bookTitle: "Nehru's",
                authorName: "pandit jawaharlal",
                id: "df5f6f3f80ec46c9824f3dc4bdd95438"
            })
            .expect(200)
            .end(function (err, res) {
                done(err);
            });
    });
});


describe('Get /getBookList', function () {
    it('get a bookList', function (done) {
        request.get('/getBookList')
            .expect(200)
            .end(function (err, res) {
                done(err);
            });
    });
});


describe('Get /deleteBook', function () {
    it('delete a book', function (done) {
        request.post('/deleteBook')
            .send({
                indexJson: 0
            })
            .expect(200)
            .end(function (err, res) {
                done(err);
            });
    });
});