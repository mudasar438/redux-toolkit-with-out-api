import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import CartContainer from './Components/CartContainer';
import {useDispatch,useSelector} from  'react-redux'
import {calculateTotals} from './feature/cart/cartSlice'
import { useEffect } from 'react';
import Modal from './Components/Modle';
import Switch from './rehan'
import Acti from './active'
import {FirstItem} from './firstItem'


function App() {
  const {cartItems} = useSelector((store)=>store.cart)
  const {isOpen} = useSelector((store)=>store.modal)
  // console.log(cartItems ,"cartitems")
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(calculateTotals());
  },[cartItems])
  return (
   <>
   {/* <div className="">
    {
      isOpen && 
    <Modal/>
    }
    <Navbar/>
    <CartContainer/> */}
   {/* </div> */}

   <Switch/>
   {/* <Acti/> */}
   {/* <FirstItem/> */}
   </>
  );
}

export default App;
