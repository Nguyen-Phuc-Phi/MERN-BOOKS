import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import BookCard from './BookCard';

function ShowBookList() {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3030/api/v1/books/').then(res => setBooks(res.data)).catch(err => console.log('Error from booklist'))
    },[books.values])
    
    const booklist = books.length === 0 ? 'no book' : books.map((book,index)=> <BookCard book={book} key={index} />)
    return (
        <div className="ShowBookList">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="display-4 text-center">
                            Books List
                        </h2>
                    </div>
                    <div className="col-md-11" >
                       <Link to='/createbook' className='btn btn-outline-warning float-right'>+ Add new book </Link>
                    </div>
                </div>
                <div className="list">{booklist}</div>
            </div>
        </div>
    )
}

export default ShowBookList