import React from 'react';
import './css/Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart } from '../features/cart/cartSlice';

export default function Cart() {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cart);

  return (
    <div style={{ height: '74vh' }}>
      <div className="container mt-5 pt-5">
        {Object.values(items).length >= 1 ? (
          <>
            <ul className="list-group mt-4">
              {Object.values(items).map((item) => (
                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <span>
                    {item.name}: ${item.price.toFixed(2)} x {item.quantity} ={' '}
                    ${(Number(item.price) * Number(item.quantity)).toFixed(2)}
                  </span>
                  <button className="btn btn-danger btn-sm" onClick={() => dispatch(removeFromCart(item.id))}>X</button>
                </li>
              ))}
            </ul>
            <div className="mt-4 d-flex justify-content-between">
              <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
              <button className="btn btn-warning" onClick={() => dispatch(clearCart())}>Clear Cart</button>
            </div>
          </>
        ) : (
          <h1 className="mt-5 pt-5 text-center text-muted">Your Cart is Empty!</h1>
        )}
      </div>
    </div>
  );
}
