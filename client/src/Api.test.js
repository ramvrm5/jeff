import React from 'react';

// API SERVICE
import { bookService } from './_httpService/bookService';

it("to create book" , async function () {
    let data = await bookService.createBook(
        {
          "bookTitle": "Nehru's",
          "authorName": "pandit jawaharlal",
          "id": "df5f6f3f80ec46c9824f3dc4bdd95438"
        });
        console.log(data)
    expect().toEqual();
})

it("get book list" , async function () {
    let data = await bookService.getBookList();
    expect(data[0].id).toEqual("df5f6f3f80ec46c9824f3dc4bdd95438");
})
