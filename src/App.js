import React from 'react';
import { Switch , Route , Redirect} from 'react-router-dom'; 
import { connect } from 'react-redux';
import { setCurrentUser} from './redux/user/user.actions';
import {createStructuredSelector} from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shops/shops.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/Header/header.component';
import SignInandSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth , createUserProfileDocument } from './firebase/firebase.utils';



class App extends React.Component {

  

  unsubscribeFromAuth = null; //bydefault


  componentDidMount() {

    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     
      //storing data into our app
      //if user signin
      if(userAuth) {
       const userRef = await createUserProfileDocument(userAuth);
       userRef.onSnapshot(snapShot => {  //async 
            setCurrentUser({
               id: snapShot.id,
               ...snapShot.data()
             
              });
       });
              
      }

       //else
       setCurrentUser( userAuth );
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header/>
       <Switch>
         <Route exact path='/' component={HomePage} />
         <Route path='/shop' component={ShopPage} />
         <Route exact path='/checkout' component={CheckoutPage} />
         <Route exact path='/signIn' render={
           () => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInandSignUp></SignInandSignUp>)
         } />
  </Switch>
      </div>
      
    );
    }

}

const mapStateToProps = createStructuredSelector ({
  currentUser : selectCurrentUser
});

const mapDispatchToProps = dispatch =>({
 setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (App);