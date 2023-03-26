import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function CreateBook() {
  const navigate=useNavigate();
  const [book, setBook] = useState({
    title: '',
    author: '',
    description: '',
    publishdate: '',
    publisher: ''
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBook({ ...book, [e.target.name]: e.target.value })
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    axios.post("http://localhost:3030/api/v1/books", book).then((response) => {
      setBook({
        title: '',
        author: '',
        description: '',
        publishdate: '',
        publisher: ''
      })
      navigate('/');
    }).catch((err)=>{
      console.log('Error in create book',err);  
    })
  }
  return (
    <div className="CreateBook">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Book List
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-3 text-center">Add book</h1>
            <p className="lead text-center">Create new book</p>
            <form className="row g-1" onSubmit={onSubmit}>
              <div className="col-md-12">
                <input type='text' name='title' placeholder='Title Book' className='form-control' value={book.title} onChange={onChange} />
              </div>
              <div className="col-md-12">
                <input type='text' name='author' placeholder='Author' className='form-control' value={book.author} onChange={onChange} />
              </div>
              <div className="col-md-12">
                <input type='text' name='description' placeholder='Description of Book' className='form-control' value={book.description} onChange={onChange} />
              </div>
              <div className="col-md-12">
                <input type='date' name='publishdate' placeholder='Publish date' className='form-control' value={book.publishdate} onChange={onChange} />
              </div>
              <div className="col-md-12">
                <input type='text' name='publisher' placeholder='Publisher' className='form-control' value={book.publisher} onChange={onChange} />
              </div>
              <div className="col-md-12">
                <button type='submit' className="btn btn-outline-warning btn-block mt-4">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateBook