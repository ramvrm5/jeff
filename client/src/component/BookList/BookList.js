import React, { useEffect, useState } from 'react'

// USER REDUCER
import { useSelector, useDispatch } from 'react-redux';
import { selectBooksList, booksList } from '../../reducer/bookSlice';

// API SERVICE
import { bookService } from '../../_httpService/bookService';

import './BookList.css'

function BookList() {
  let getBooksList = useSelector(selectBooksList);
  const [booksLists, setBooksLists] = useState([]);
  const bookDispatch = useDispatch();

  useEffect(() => {
    getBookList();
  }, [])

  useEffect(() => {
    setBooksLists(getBooksList);
  }, [getBooksList])

  const getBookList = async () => {
    await bookService.getBookList().then((result) => {
      setBooksLists(result);
      bookDispatch(
        booksList(result)
      )
    })
  }

  const deleteBook = async (index) => {
    /* let arrayOfBooks = [...booksLists];
    arrayOfBooks.splice(index, 1); */
    await bookService.deleteBook({indexJson:index}).then((result) => {
      bookDispatch(
        booksList(result)
      )
    })
  }

  return (
    <div className="bookList_container">
      {booksLists?.map((object, i) => {
        return (
          <div key={i} className="booklist_wrapper">
            <div className="content_book" >
              <div className="content_book_title">
                {object.bookTitle}
              </div>
              <div className="content_book_author">
                {object.authorName}
              </div>
            </div>
            <div className="delete_book" >
              <span onClick={() => deleteBook(i,object)} >
                <i className="fa fa-times" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default BookList

