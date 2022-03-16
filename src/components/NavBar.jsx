import React from 'react';
import avavyaLogo from "../assets/avavya-logo.png";
import avatar from "../assets/avatar-4.jpg";
import { NavLink } from 'react-router-dom';
import { IconBadge } from '../containers';

const NavBar = () => {  

    return (
      <div className="navigation-top w-75">
          <header className="nav-bar left-aligned">
              <div className="brand-img children-middle">
                  <img src={avavyaLogo} alt="avavya-logo"/>
              </div>
              <section className="nav-links flex">
                  <NavLink to="/" className="nav-item paragraph2">
                      Home
                  </NavLink>
                  <NavLink to="/Products" className="nav-item paragraph2 txt-gray">
                      Shop
                  </NavLink>
              </section>
              <section className="user-info children-middle">
                  <div className="user-profile children-middle">                 
                      <div className="dropdown flex children-middle">
                          <p className="user-name paragraph2 txt-gray"><strong>Guest &#9660;</strong></p>
                          <img className="avatar avatar-xxs" src={avatar} alt="user-avatar"></img>
                          <div className="dropdown-content">
                              <a className="user-name paragraph2 txt-gray" href='#'>Login</a>
                              <a className="user-name paragraph2 txt-gray" href='#'>Signup</a>
                          </div>
                      </div>
                  </div>
                  <div className="wishlist">
                      <IconBadge nextPath="/Wishlist" iconName="favorite_border" count="3" />
                  </div>
                  <div className="cart">
                      <IconBadge nextPath="/Cart" iconName="shopping_cart" count="1"/>
                  </div>  
              </section>
          </header>
      </div>
    )
  }

export default NavBar;