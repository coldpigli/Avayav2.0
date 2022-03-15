import React from 'react';
import avavyaLogo from "../assets/avavya-logo.png";
import avatar from "../assets/avatar-4.jpg";
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className="navigation-top w-75">
        <header className="nav-bar left-aligned">
            <div className="brand-img children-middle">
                <img src={avavyaLogo} alt="avavya-logo"/>
            </div>
            <section className="nav-links flex">
                <Link to="/" className="nav-item paragraph2 txt-gray txt-brand-color">
                    Home
                </Link>
                <Link to="/Products" className="nav-item paragraph2 txt-gray">
                    Shop
                </Link>
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
                    <div className="badge">
                        <Link to="/Wishlist"><span className="material-icons md-24">favorite_border</span></Link> 
                        <div className="badge-value top-right">3</div>
                    </div>
                </div>
                <div className="cart">
                    <div className="badge">
                        <Link to="/Cart"><span className="material-icons md-24">shopping_cart</span></Link>
                        <div className="badge-value top-right">1</div>
                    </div>
                </div>  
            </section>
        </header>
    </div>
  )
}

export default NavBar;