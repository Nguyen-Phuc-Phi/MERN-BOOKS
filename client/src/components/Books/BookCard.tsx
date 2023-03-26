import React from 'react'
import { Link } from 'react-router-dom'
function BookCard(props:any) {  
  return (
    <div className="card-container">
        <img alt='' src='https://media.npr.org/assets/img/2022/12/22/gettyimages-1245203807-1536x1029_wide-9982607ca51f99999656d993bf5511d42533c0f2-s1100-c50.jpg' height={200}/>
        <div className="desc">
            <h2><Link to={`/showbook/${props.book._id}`}>{props.book.title}</Link></h2>
            <h3>{props.book.author}</h3>
            <p>{props.book.description}</p>
        </div>
    </div>
  )
}

export default BookCard