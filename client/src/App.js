import React, { useEffect } from "react";

import "./App.css";
import HomePage from "./Page/HomePage/HomePage";
import { Switch, Route, Redirect } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Header from "./components/Header/Header";
import SignInAndSignUp from "./components/SignInAndSignUp/SignInAndSignUp";
//import { auth, createUserProfileDocument } from "./Firebase/FirebaseUtil";
import { connect } from "react-redux";
//import { setCurrentUser } from "./Redux/User/userAction";
import Checkout from "./components/Checkout/Checkout";

import {selectCurrentUser} from "./Redux/User/userSelector";
import {checkUserSession} from "./Redux/User/userAction";

import { createStructuredSelector } from 'reselect'

const App=({checkUserAuthen,currentUser})=> {
 

  useEffect(()=>{
    const unsubscribeFromAuth = null;
    checkUserAuthen();
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);

    //     userRef.onSnapshot((snapShot) => {
    //       setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data(),
    //       });
    //     });
    //   }

    //   setCurrentUser(userAuth);
     
    // });
    return ()=>unsubscribeFromAuth()
    
  },[checkUserAuthen])
    
    
    
  

 
    return (
      <div>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/shop" component={Shop} />
            <Route exact path='/checkout' component={Checkout} />
            <Route
              path="/signin"
              render={() =>
                currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <SignInAndSignUp />
                )
              }
            />
             
          </Switch>
        </div>
      </div>
    );
  }


const mapStateToProps =  createStructuredSelector({
  
    currentUser: selectCurrentUser,
   
  
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    checkUserAuthen: () => {
      dispatch(checkUserSession())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
// import React, { useEffect, useState } from "react";

// import "./App.css";
// import HomePage from "./Page/HomePage/HomePage";
// import { Switch, Route } from "react-router-dom";
// import Shop from "./components/Shop/Shop";
// import Header from "./components/Header/Header";
// import SignInAndSignUp from "./components/SignInAndSignUp/SignInAndSignUp";
// import {auth ,createUserProfileDocument} from "./Firebase/FirebaseUtil";
// function App() {
//   const [currentUser, setCurrentUser] = useState("");
//   useEffect(() => {
//     const unsubcribeFromAuth = auth.onAuthStateChanged = (user) => {

//       setCurrentUser(user)
//       console.log(user);
//       return () => {
//         unsubcribeFromAuth();
//       };
//     };
//   }, []);
//   return (
//     <div className="App">
//       <Header currentUser={currentUser} />
//       <Switch>
//         <Route path="/" exact component={HomePage} />
//         <Route path="/shop" component={Shop} />
//         <Route path="/signin" component={SignInAndSignUp} />
//       </Switch>
//     </div>
//   );
// }

// export default App;
