import React from 'react'
import  {AiFillCaretLeft} from 'react-icons/ai'
import {AiFillCaretRight} from 'react-icons/ai' 
import { removeItem,increase,decrease } from '../feature/cart/cartSlice'
import { useDispatch } from 'react-redux'


// get props from cartContainer  and distruct  and use in file
const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch =  useDispatch()
  return (
    <>
        <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        <button
          className='remove-btn'
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          remove
        </button>
      </div>
      <div className='btn'>
        <button
          className='amount-btn'
          onClick={() => { if (amount === 1) {
            dispatch(removeItem(id));
            return;
          }
            dispatch(decrease({ id }));
          }}
        >
          <AiFillCaretLeft  className='Inc'/>
        </button>
        <p className='amount'>{amount}</p>
        <button
          className='amount-btn'
          onClick={() => {
           
            dispatch(increase({ id }));
          }}
        >
          <AiFillCaretRight className='Inc' />
        </button>
      </div>
    </article>
    </>
  )
}

export default CartItem