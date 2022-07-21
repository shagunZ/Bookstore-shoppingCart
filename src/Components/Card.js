

// import { dblClick } from '@testing-library/user-event/dist/click';
import React , {useState} from 'react'
import '../App.css';
import Navbar from './Navbar'

// import books from './db.json'



export const Card = (props) => {

const{books,onAdd,carditems,show,setShow} = props
  const [count,setCount] = useState(0)


  return (
    <div class="frow" >
 

{props.books.map((book,index)=>(
  <div key={book.isbn}>
<div key={book.isbn} class="flip-card card">
  <div class="flip-card-inner ">
    <div class="flip-card-front">
    <img style={{objectFit:'cover'}}src={book.cover} class="card-img-top" alt="..." />
    </div>
    <div key={book.isbn} class="flip-card-back">
      <h3 style={{fontWeight:'bolder'}}>{book.title}</h3>
      <h5 style={{fontWeight:'bolder'}}>{book.subtitle} - {book.author}</h5>
      <p>{book.description}</p>
   
    <button class="btn" onClick={()=>onAdd(book)}>BUY NOW</button>

    </div>
  </div>
</div>



  </div>
))}
</div>
  )
}

 export default Card


