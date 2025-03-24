import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('cart');
        return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (err) {
        return undefined;
    }
};

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state.cart);
        localStorage.setItem('cart', serializedState);
    } catch (err) {
        console.error("Could not save state", err);
    }
};

const store = configureStore({
    reducer: rootReducer,
    preloadedState: { cart: loadState() }
});

store.subscribe(() => saveState(store.getState()));

export default store;
