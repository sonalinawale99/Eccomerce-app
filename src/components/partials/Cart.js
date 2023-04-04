import React from 'react';
import {Link} from 'react-router-dom'


const Cart = (props) => {

    
  return (
    <>
    <Link to="/Cart">	
 <img src='https://media.istockphoto.com/id/1271369263/vector/bag-icon-with-sale-inscription-stock-vector-illustration-flat-design-style.jpg?s=612x612&w=is&k=20&c=2h1IVAe88kl_fl_e_QnIAYSstkfvRA16PzASkcbabqk=' style={{height:"50px",width:"50px"}}/>
<span>{props.cart.length}</span></Link>
    </>
  )
}

export default Cart;