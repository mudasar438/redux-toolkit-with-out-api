import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import CartItem from './CartItem';
import {clearCart} from '../feature/cart/cartSlice'
import { openModal } from '../feature/Modal/modleSlice';

const CartContainer = () => {
  const dispatch = useDispatch();
  // just get Redux store these variables from root cart Reducer
    const { cartItems, total, amount } = useSelector((store) => store.cart);

  
    if (amount < 1) {
        return (
          <section className='cart'>
            <header>
              <h2>your bag</h2>
              <h4 className='empty-cart'>is currently empty</h4>
            </header>
          </section>
        );
      }

  return (
    <section className='cart'>
    <header>
      <h2>your bag</h2>
    </header>
    <div>
      {/* cartItems is a array of object which is get from Redux store and just using map display objects  in CartItem.js*/}
      {cartItems.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
    </div>
    <footer>
      <hr />
      <div className='cart-total'>
        <h4>
          {/*  just get from Redux store and show */}
          total <span>${total.toFixed(2)}</span>
        </h4>
      </div>
      <button className='btn clear-btn' onClick={() => dispatch(openModal())}>
        clear cart
      </button>
    </footer>
  </section>
  )
}

export default CartContainer