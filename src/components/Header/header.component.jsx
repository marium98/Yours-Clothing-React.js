import React from 'react';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { connect} from 'react-redux';

/* connect is a high order Component that allow us to modify our Component
to have access to things related to redux */

/* High order Component take functions as arguements */

import CartIcon from '../cart-icon/cart-icon.component';
import Cart from '../cart-dropdown/cart-dropdown.component';
import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';
 
   //destructure the currentUser
const Header = ({ currentUser , hidden}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      { currentUser ?(     
             <div className='option' onClick={() => auth.signOut()}>
          Sign Out</div> )
       :  ( 
         <Link className='option' to='/signIn'>
           Sign In
         </Link>
       )
      }
      <CartIcon></CartIcon>
    </div>
    {
    hidden ? null :<Cart />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);