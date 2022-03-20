import React, { useEffect, useState } from 'react';

// UUID
import { v4 as uuidv4 } from 'uuid';

// FORMIT FOR VALID FORMS
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// USER REDUCER
import { useSelector, useDispatch } from 'react-redux';
import { booksList, selectBooksList } from '../../reducer/bookSlice';

// API SERVICE
import { bookService } from '../../_httpService/bookService';

import './CreateBook.css';

function CreateBook() {
  let getBooksList = useSelector(selectBooksList);
  const [booksLists, setBooksLists] = useState([]);
  const bookDispatch = useDispatch();

  useEffect(() => {
    setBooksLists(getBooksList);
  }, [getBooksList])

  return (
    <Formik
      initialValues={{
        bookTitle: '',
        authorName: ''
      }}

      // VALIDATIONS OF SIGN-UP FORM 
      validationSchema={Yup.object().shape({
        bookTitle: Yup.string()
          .required('Required'),
        authorName: Yup.string()
          .required('Required'),
      })}

      // CREATE BOOK LIST METHOD
      onSubmit={(fields, actions) => {
        bookService.createBook(fields).then((result) => {
          let uuid = uuidv4();
          let modifyUUID = uuid.replace(/-/g, "");
          fields["id"] = modifyUUID;
          let arrayOfBooks = [...booksLists];
          arrayOfBooks.push(fields);
          setBooksLists(arrayOfBooks);
          bookDispatch(
            booksList(arrayOfBooks)
          )
          actions.resetForm({
            values: {
              bookTitle: '',
              authorName: ''
            },
          });

        })
      }}
      render={({ errors, status, touched }) => (
        <div className="createBook_container">
          <Form>
            <div className="form-group input_bookTitle">
              <Field name="bookTitle" type="text" placeholder="Book Title" className={'form-control' + (errors.bookTitle && touched.bookTitle ? ' is-invalid' : '')} />
              <ErrorMessage name="bookTitle" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group input_author">
              <Field name="authorName" type="text" placeholder="Author" className={'form-control' + (errors.authorName && touched.authorName ? ' is-invalid' : '')} />
              <ErrorMessage name="authorName" component="div" className="invalid-feedback" />
            </div>

            <div className="form-group create_btn">
              <button type="submit" className="btn">Create</button>
            </div>
          </Form>
        </div>
      )}
    />
  )
}

export default CreateBook