import React, {useEffect} from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {useStateValue} from  "./StateProvider"
import { auth } from './firebase';

function App() {
  const [{ user },dispatch] = useStateValue();

  //piece of code which runs on  a given Condition
  useEffect(() => {
    
    const unsubscribe = auth.onAuthStateChanged((authUser) => {

      if(authUser) {
        //user login

        dispatch({
          type:"SET_USER",
          user: authUser,
        })
      }  
      
      else {
        //user logout

        dispatch({
          type:"SET_USER",
          user:null,
        });
      }


    });

    console.log('USER IS >>>>',user);

    return () => {
      // any cleanup operations go in here......
      unsubscribe();
    }

  }, []);

  return (
    <Router>
      <div className="app">
     <Switch>
       <Route path="/checkout">
         <Header />
         <Checkout />
         
       </Route>
       <Route path="/login">
         <Login />
       </Route>
       { /* THIS IS A DEFAULT ROUTE*/}
       <Route path="/">
         <Header />
         <Home />
       </Route>
     </Switch>
     </div>
    </Router>
  );
}

export default App;
