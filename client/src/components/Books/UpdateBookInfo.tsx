import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

function UpdateBookInfo(props: any) {
  const [editbook, setEditbook] = useState({
    title: '',
    author: '',
    description: '',
    publishdate: '',
    publisher: ''
  });

  const { id } = useParams();
  const navigate = useNavigate();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditbook({ ...editbook, [e.target.name]: e.target.value })
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.put(`http://localhost:3030/api/v1/books/${id}`, editbook)
      .then(res => navigate(`/showbook/${id}`))
      .catch(err => console.log('Error in UpdateBookInfo!', err))
  }
  
  useEffect(() => {
    axios.get(`http://localhost:3030/api/v1/books/${id}`)
      .then(res => setEditbook(res.data))
      .catch(err => console.log('Error from UpdateBookInfo'))
  }, [id])

  return (
    <div className="UpdateBookInfo">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <Link to='/' className='btn btn-outline-warning float-left'>Show Book List</Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">
              Edit Book
            </h1>
            <p className="lead text-center">
              Update Book's Info
            </p>
          </div>
          <div className="col-md-8 m-auto">
            <form className="row g-1" onSubmit={onSubmit}>
              <div className="col-md-12">
                <input type='text' name='title' placeholder='Title Book' className='form-control' value={editbook.title} onChange={onChange} />
              </div>
              <div className="col-md-12">
                <input type='text' name='author' placeholder='Author' className='form-control' value={editbook.author} onChange={onChange} />
              </div>
              <div className="col-md-12">
                <input type='text' name='description' placeholder='Description of Book' className='form-control' value={editbook.description} onChange={onChange} />
              </div>
              <div className="col-md-12">
                <input type='date' name='publishdate' placeholder='Publish date' className='form-control' value={editbook.publishdate} onChange={onChange} />
              </div>
              <div className="col-md-12">
                <input type='text' name='publisher' placeholder='Publisher' className='form-control' value={editbook.publisher} onChange={onChange} />
              </div>
              <div className="col-md-12">
                <button type='submit' className="btn btn-outline-warning btn-block mt-4">Update book</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateBookInfo