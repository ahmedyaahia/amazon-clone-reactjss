import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from "./StateProvider";
import 'firebase/compat/auth';
import { auth } from "./firebase";



const Header = () => {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthenticaton = () => {
      if (user) {
        auth.signOut();
      }
    }

    return (
        <nav className="header">


            {/* logo on the left*/}
            <Link to="/">
                <img className="header__logo" src="/images/pngimg.com - amazon_PNG25.png" alt="" />
            </Link>

            {/* Search Box*/}
            <div className="header__search">
                <input type="text" placeholder=" Search Amazon.eg" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            {/* 3 Links*/}

            <div className="header__Nav">
                {/*1st link*/}
                <Link to={!user && '/LoginPage'} className="header__link">
                    <div onClick={handleAuthenticaton} className="heaader__option">
                        <span className="header__lineOne">Hello {!user ? 'Guest' : user.email}</span>
                        <span className="header__lineTwo">{user ? 'Sign Out' :  'Sign In'}</span>
                    </div>
                </Link>


                {/*2nd link*/}
                <Link to="/Orders" className="header__link">
                    <div className="heaader__option">
                        <span className="header__lineOne">Returns</span>
                        <span className="header__lineTwo">& orders</span>
                    </div>

                </Link>
                {/*3rd link*/}
                <Link to="/" className="header__link">
                    <div className="heaader__option">
                        <span className="header__lineOne">Your</span>
                        <span className="header__lineTwo">Prime</span>
                    </div>

                </Link>
                {/*4th link*/}
                <Link to="/CheckOut" className="header__link">
                    <div className="header__Basket">
                        <ShoppingBasketIcon />
                        <span className="header__lineTwo header__basketCount">{basket?.length}</span>

                    </div>
                </Link>

            </div>
            {/* Basket Icon*/}



        </nav>
    )
}

export default Header