
import React from 'react'
import '../App.css';



export const Cart = (props) => {

   const {cartitems,onAdd,books,onRemove} = props;
const itemsPrice = cartitems.reduce((a,c)=>a+c.pages * c.qty,0)
const shippingPrice = itemsPrice > 2000 ? 0 : 50;
const totalPrice = itemsPrice + shippingPrice
  return (
    <div >
      
      
      <div class="container">
        <h2 className='heading'>CART ITEMS</h2>
        <div>
   {cartitems.length===0 && <div>Cart is empty</div>}
    </div>
{props.cartitems.map((book,index)=>(
    <div key={book.isbn}>
    <div key={book.isbn} className="row">
    <div className='col-2'>{book.title}</div>
    <div >
    <div className='col-2'><button style={{fontWeight:'bold',cursor:'pointer'}} onClick={()=>onAdd(book)} className="add">+</button></div>
    <div className='col-2'><button style={{fontWeight:'bold',cursor:'pointer'}} onClick={()=>onRemove(book)} className="remove">-</button></div>
</div>
   <div className='col-2 ' >{book.qty}*Rs.{book.pages} = Rs.{book.qty*book.pages}</div>
</div>
</div>
))}

{cartitems.length !=0 && (
  <>
  <hr></hr>
  <div className='row'>
    <div className='col-2'>Items Price</div>
    <div>Rs.{itemsPrice}</div>
  </div>
  <div className='row'>
    <div className='col-2'>shipping Price</div>
    <div>Rs.{shippingPrice}</div>
  </div>
  <div className='row' style={{backgroundColor:'#fdf1e8'}}>
    <div className='col-2'><strong style={{color:'#5e4223',fontSize:'18px'}}>Total Price = </strong></div>
    <div><strong>Rs.{totalPrice}</strong></div>
  </div>

  <hr></hr>
  <div className='rows'>
    <button className='checkoutbtn' onClick={()=>alert('checkout')}>
      Checkout
    </button>
  </div>
  </>
)}

    </div>
    </div>
  )
}

 export default Cart