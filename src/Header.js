import React from "react";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
function Header(){
  const [{basket}, dispatch] = useStateValue();
    return(
          <div className="header">
            <Link to={'/'} style={{textDecoration: "none"}}>
              <div className="header_logo">
                <StorefrontIcon className='hearder_logoImage' fontSize='large'/>
                <h2 className="header_logoTitle">eShop</h2>
              </div>
            </Link>
          <div className="header_search">
            <input type="text" className="searchBar" />
            <SearchIcon className='header_searchIcon' />
          </div>
          <div className="header_nav">
          <Link to={'/login'} style={{textDecoration: "none"}}>
            <div className="nav_Item">
              <span className="nav_Item_line1">Hello Guest</span>
              <span className="nav_Item_line2">Sign In</span>
            </div>
            </Link>
            <div className="nav_Item">
              <span className="nav_Item_line1">Your</span>
              <span className="nav_Item_line2">Shop</span>
            </div>
            <Link to={'/checkout'} style={{textDecoration: "none"}}>
                <div className="nav_Item">
                  <ShoppingBasketIcon />
                  <span className="nav_Item_line2 nav_BasketCount">{basket?.length}</span>
                </div>
            </Link>
          </div>
      </div>

    );
}
export default Header;