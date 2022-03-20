import React from 'react';

import Header from './component/Header/Header';
import BookList from './component/BookList/BookList';
import CreateBook from './component/CreateBook/CreateBook';

import './Home.css';

function Home() {
  return (
    <div className='main_container'>
      <Header  />
      <BookList  />
      <CreateBook  /> 
    </div>
  );
}

export default Home;
