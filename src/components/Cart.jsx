import React from 'react'
import { useSelector , useDispatch } from 'react-redux';
import {setOpen} from '../slices/cart/cartSlice';
import { addItems , increaseQuantity , decreaseQuantity} from '../slices/items/itemsSlice';
const Cart = () => {
  const cartState = useSelector((state) => state.cart.open); // Access nested items array
  const items = useSelector((state) => state.items.items); // Access nested items array
  const dispatch = useDispatch();
  return (
    <div>
    <div className='cart' onClick={
        ()=>{
        console.log('pressed cart')
        dispatch(setOpen())
        }
        }>
      Cart
    </div>
    {/* <div>adkjlhdsjhds</div>   */}

    {cartState?<div className='cartItem'>
        {
        // console.log('show');

        items.map((item)=>{
            {
                console.log("cart item rendering");
            
            if(item.quantity>0){
            {console.log(item.quantity)}
            return item.quantity > 0 ? (
                <div class="col-sm-22">
         <div key={item.id}  class="card"> 
          <div class="card-body">

          <p class="card-title" >Name: {item.name}</p>
          <p>Price: {item.price}</p>

            </div>
            {(item.quantity==0)?<div class="card-body"><button onClick={()=>{
            console.log("pressed")
            dispatch(increaseQuantity(item.id))
            }} class="btn btn-primary" >Add to Cart</button></div>:<div class="card-body">
          <button onClick={()=>{
            console.log("pressed")
            dispatch(increaseQuantity(item.id))
            }} class="btn btn-primary" >+</button>
            <span>Quantity: {item.quantity}</span>
            <button onClick={()=>{
            console.log("pressed")
            dispatch(decreaseQuantity(item.id))
            }} class="btn btn-primary" >-</button>
            </div>}
            </div>
            </div>
              ) : null;
            }
            }

        })}
    </div>:console.log(cartState)}

    </div>
    )
}

export default Cart
