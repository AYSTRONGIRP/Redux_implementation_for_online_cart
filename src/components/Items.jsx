import React, { useEffect} from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { addItems , increaseQuantity , decreaseQuantity} from '../slices/items/itemsSlice';

const Items = () => {
  const items = useSelector((state) => state.items.items); // Access nested items array
  const dispatch = useDispatch();

  console.log(items); // Log the actual items arrayRedux_application_for cart\src\assets\items.json

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('Redux_application_for cart\src\assets\items.json');
      const data = await response.json();
      dispatch(addItems(data));
    };
    fetchData();
  }, []);
      
      // Fetch data on component mount
    // useEffect(() => {
    //     // Fetch data from items.json
    //     fetch('src\\assets\\items.json')
    //         .then(res =>{
    //             console.log(items)
    //             dispatch(addItems(res.json()))
    //             console.log(items)
    //         }
    //             )
    //         // .then(data => {console.log(data)
    //         //     console.log(items)}) // Log the fetched data to the console
            
    //         .catch(error => console.error('Error fetching data:', error));
    // }, []); // Empty dependency array to ensure the effect runs only once (on mount)

    return (
        <div class="row">
            {/* <div > */}
      {/* Iterate through items and display data */}
      {items.map((item) => (
        
        <div class="col-sm-3">
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
        // </div>
      ))}
    </div>
          
    );
}

export default Items;
