import React from 'react';
import styled from 'styled-components';
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CreateBook from './components/Books/CreateBook';
import ShowBookList from './components/Books/ShowBookList';
import ShowBookDetails from './components/Books/ShowBookDetails';
import UpdateBookInfo from './components/Books/UpdateBookInfo';
// const Button = styled.button`
//   background-color: red;
//   margin:5px;
// `

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShowBookList />} />
          <Route path='/createbook' element={<CreateBook />} />
          <Route path='/editbook/:id' element={<UpdateBookInfo />} />
          <Route path='/showbook/:id' element={<ShowBookDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
