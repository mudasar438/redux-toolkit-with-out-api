// Allows you to extract data from the Redux store state, using a selector function.
import { useSelector } from 'react-redux';
import {BsCart2} from 'react-icons/bs'

const Navbar = () => {
  // in this line useSelector  get root rdeucer  from Redux store example: in my project  1) cart 2) modal  these are two root reducer
  const { amount } = useSelector((store) => store.cart);
  // just distruct amount of cart from Redux store use in navbar
  return (
    <>
      <nav>
        <div className='nav-center'>
          <h3>redux toolkit</h3>
          <div className='nav-container'>
            <BsCart2  />
            <div className='amount-container'>
              <p className='total-amount'>{amount}</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;