import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Array to store item data
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    // Reducer to add items
    addItems: (state, action) => {
        const newItems = action.payload.cart; // Access the cart array from payload
        console.log("newIte")
        console.log(newItems);
        console.log(state)
        return {
        ...state,
        items: [...state.items, ...newItems], // Spread existing items and new items
  };
    },
    // Add more reducers for other actions you need (e.g., update, delete)
    increaseQuantity: (state, action) => {
     console.log(action);
     const updatedArray = state.items.map(item => {
        if (item.id === action.payload) {
          // Increase the quantity of the found item
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      // Return the updated state
      return {
        ...state,
        items: updatedArray,
      };

    },
    decreaseQuantity: (state, action) => {
        console.log(action);
        const updatedArray = state.items.map(item => {
           if (item.id === action.payload) {
             // Increase the quantity of the found item
             return { ...item, quantity: (item.quantity)?item.quantity-1:0 };
           }
           return item;
         });
   
         // Return the updated state
         return {
           ...state,
           items: updatedArray,
         };
   
       }
  },
});

export const { addItems , increaseQuantity , decreaseQuantity} = itemsSlice.actions;
export default itemsSlice.reducer;


// increaseQuantity: (state, action) => {
//     const { itemId } = action.payload; // Destructure item ID from payload
  
//     if (!itemId) {
//       console.error('increaseQuantity action requires an itemId in the payload');
//       return state; // Return unchanged state if no itemId provided
//     }
  
//     const itemIndex = state.items.findIndex(item => item.id === itemId); // Find item index
  
//     if (itemIndex === -1) {
//       console.error(`Item with ID ${itemId} not found in state`);
//       return state; // Return unchanged state if item not found
//     }
  
//     // Create a copy of the item to avoid mutation
//     const updatedItem = { ...state.items[itemIndex] };
  
//     // Increment quantity by 1
//     updatedItem.quantity++;
  
//     // Update the item in the state array using spread syntax
//     return {
//       ...state,
//       items: [
//         ...state.items.slice(0, itemIndex),
//         updatedItem,
//         ...state.items.slice(itemIndex + 1),
//       ],
//     };
//   },
  