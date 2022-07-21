
import { isVisible } from '@testing-library/user-event/dist/utils';
import axios from 'axios';
import React ,{useState,useRef,useEffect} from 'react'
import '../App.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';







// try//////////////////////////////

const Cart = (props) => {


  const {cartitems,onAdd,onRemove} = props;
  const itemsPrice = cartitems.reduce((a,c)=>a+c.pages * c.qty,0)

const shippingPrice = itemsPrice > 2000 ? 0 : 50;
const totalPrice = itemsPrice + shippingPrice

 return (
  
    
     <div className="container" >
       <h2 className='heading'>CART ITEMS</h2>
       <div>
  {cartitems.length===0 && <div className="col-2">Cart is empty</div>}
   </div>
{props.cartitems.map((book,index)=>(
   <div key={book.isbn}>
   <div key={book.isbn} className="row">
   <div className='col-2'>{book.title}</div>
   <div >
   <div className='col-2'><button style={{fontWeight:'bold',cursor:'pointer'}} onClick={()=>onAdd(book)} className="add">+</button></div>
   <div className='col-2'><button style={{fontWeight:'bold',cursor:'pointer'}} onClick={()=>onRemove(book)} className="remove">--</button></div>
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
   <div style={{color:'black'}}>Rs.{itemsPrice}</div>
 </div>
 <div className='row'>
   <div className='col-2'>shipping Price</div>
   <div style={{color:'black'}}>Rs.{shippingPrice}</div>
 </div>
 <div className='row' style={{backgroundColor:'#fdf1e8'}}>
   <div className='col-2'><strong style={{color:'black',fontSize:'18px'}}>Total Price = </strong></div>
   <div><strong style={{color:'black'}}>Rs.{totalPrice}</strong></div>
 </div>

 <hr></hr>
 <div className='rows' style={{position:'relative',left:'4em'}}>
   <button className='checkoutbtn' onClick={()=>alert('checkout')}>
     Checkout
   </button>
 </div>
 </>
)}

   </div> 
   

 )
}


// try//////////////////////////////









export const Navbar = (props) => {


const API_KEY = 'b1f226d1'
 
  const [SearchQuery,updateSearchQuery]= useState();
  const [timeoutId,updateTimeoutId]= useState();
  const [movieList,updateMovieList]= useState([]);
 



// not used -------------------
  const fetchData = async (searchString)=>{
    const response = await axios.get(
      `http://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`
      );
      console.log(response)
      updateMovieList(response.data.Search)
  }
  const onTextChange=(event)=>{
    clearTimeout(timeoutId)
    updateSearchQuery(event.target.value);
    const timeout = setTimeout(()=>fetchData(event.target.value),500)
    console.log(event.target.value)
    updateTimeoutId(timeout)
  }
// =-----------------------=


const [show, setShow] = useState(false);

// const [blur, setblur] = useState(1);

  const ref = useRef(null);


 function onClick(){
    console.log('clicked')
    
    }

    
    


        
  
const {countCartitems,cartitems,onAdd,books,onRemove,visible,blur} = props;

  


return (


    <div className="start" >
      
      
      
    <div className="navbar " >
        <div >
            <img className="img" src="https://th.bing.com/th/id/OIP.s6qkxOqsGKB_7JnvbKujWAHaE2?w=267&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="logo" />
        </div>

        <div>
        <ul className="list " >
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
              </div>

         <div className='rightnav'>
           <ul >
   




{/* card///////////////////////////////////////// */}

<Popup  setShow={true} style={{visibility:'hidden'}} trigger={<button id="but1" onClick={onClick()} ref={ref} style={{display:'flex',flexDirection:'row',textDecoration:'none',color:'black',alignItems:'center',cursor:'pointer'}}><i class="fa-solid fa-cart-plus fa-2x cart" style={{margin:'5px'}}></i> 
      cart</button>}>
     
      {Cart(props)}
     
</Popup>

{/* <button id='opencart' onClick={onClick}  style={{display:'flex',flexDirection:'row',textDecoration:'none',color:'white'}}> <i class="fa-solid fa-cart-plus fa-2x cart" style={{margin:'5px'}}></i> 

{show? (
          Cart(props)
        ):( ''
        )}  
   
      </button> */}

  
     

{/* card//////////////////////////////////////////////// */}






      <p> 


        {countCartitems? (
          <button style={{fontWeight:'bold'}}>{countCartitems}</button>
        ):( ''
        )}
        </p> 
           
           <li><a href="#">Login</a></li>
           <li><a href="#">Signup</a></li>
           
           </ul>

          <div> <i class="fa-solid fa-magnifying-glass searchlogo"><input onChange={onTextChange} value={SearchQuery}type="search" className="searchy" placeholder="search here" /></i></div>
    
    </div>
    </div>


    </div>
  )
}

 export default Navbar