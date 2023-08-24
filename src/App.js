import React, { useEffect } from 'react';

// libraries
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// components
import Login from './Login';
import CheckOut from './CheckOut';
import Home from './Home';
import Header from './Header';
import Payment from './Payment';
import Orders from './Orders';

// style
import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import './App.css';


const promise = loadStripe(
  "pk_test_51NhYkLGRFegUuW3Wtr8yqasaxZ20rot9IQtMUXzTAO6CgBS3QgleaO5cTv1t8NafPQMVBosJZWWs1pP1sSp2BCpB00k1gGyCSF"
);




function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);




  return (
    <Router>
      {


        <>
          <Header />

          <Routes>
            {/* DEFULT PAGE and route*/}

            <Route path='/Orders' element={<Orders />} />

            <Route path='/' element={<Home />} />

            <Route path='/CheckOut' element={<CheckOut />} />

            <Route
              path="/payment"
              element={
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              }
            />
            <Route path='/LoginPage' element={<Login />} />

          </Routes>
        </>
      }
    </Router>
  );
}

export default App;
