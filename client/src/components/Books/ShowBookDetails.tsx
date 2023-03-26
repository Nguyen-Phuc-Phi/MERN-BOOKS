import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

interface BookDetailStyle{
    _id:string,
    title:string,
    author:string,
    description:string,
    publishdate:string,
    publisher:string
}

function ShowBookDetails() {
    const [bookdetails,setBookdetails]=useState<BookDetailStyle>();
    const {id}=useParams();    
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get(`http://localhost:3030/api/v1/books/${id}`)
        .then(res => setBookdetails(res.data))
        .catch(err => console.log('Error from ShowBookDetails'))
    },[id])
    
    const deleteBook =(id:any)=>{
        axios.delete(`http://localhost:3030/api/v1/books/${id}`)
        .then(res => navigate('/'))
        .catch(err => console.log('Error delete ShowBookDetails',err))
    }

    const bookItem=(
        <table className='table table-hover table-dark'>
            <tbody>
                <tr>
                    <th scope='row'>1</th>
                    <td>Title</td>
                    <td>{bookdetails?.title}</td>
                </tr>
                <tr>
                    <th scope='row'>2</th>
                    <td>Author</td>
                    <td>{bookdetails?.author}</td>
                </tr>
                <tr>
                    <th scope='row'>3</th>
                    <td>Description</td>
                    <td>{bookdetails?.description}</td>
                </tr>
                <tr>
                    <th scope='row'>4</th>
                    <td>Publish Date</td>
                    <td>{bookdetails?.publishdate.split('T')[0]}</td>
                </tr>
                <tr>
                    <th scope='row'>5</th>
                    <td>Publisher</td>
                    <td>{bookdetails?.publisher}</td>
                </tr>
            </tbody>
        </table>
    )
  return (
    <div className="ShowBookDetails">
        <div className="container">
            <div className="row">
                <div className="col-md-10 m-auto">
                    <Link to='/' className='btn btn-outline-warning float-left'>Show Book List</Link>
                </div>
                <div className="col-md-8 m-auto">
                    <h1 className="display-4 text-center">Book's Record</h1>
                    <p className="lead text-center">View Book's Info</p>
                </div>
                <div className="col-md-10 m-auto">{bookItem}</div>
                <div className="col-md-6 m-auto">
                    <button className="btn btn-outline-danger btn-block" onClick={()=>deleteBook(bookdetails?._id || '')}>
                        Delete Book
                    </button>
                </div>
                <div className="col-md-6 m-auto">
                    <Link to={`/editbook/${bookdetails?._id}`} className="btn btn-outline-info btn-block" >
                        Edit Book
                    </Link >
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShowBookDetails