  import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: {},
        totalQuantity: 0,
        totalPrice: 0
    },
    reducers: {
        addToCart: (state, action) => {
            const { id, name, price } = action.payload;
            if (state.items[id]) {
                state.items[id].quantity += 1;
            } else {
                state.items[id] = { id, name, price, quantity: 1 };
            }
            state.totalQuantity++;
            state.totalPrice += price;
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            if (state.items[id]) {
                state.totalQuantity -= state.items[id].quantity;
                state.totalPrice -= state.items[id].price * state.items[id].quantity;
                delete state.items[id];
            }
        },
        clearCart: (state) => {
            state.items = {};
            state.totalQuantity = 0;
            state.totalPrice = 0;
        }
    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
