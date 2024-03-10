import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div class="header-container">
            <header class="header">
                <a href="#" class="logo">COINZONE</a>
                {/* <i class='bx bx-menu' id="menu-icon"></i> */}
                <nav class="navbar">
                    <a href="#home">Home</a>
                    <a href="#market">Market</a>
                    <a href="#choose">Choose Us</a>
                    <a href="#join">Join</a>
                    <div class="nav-icon">
                        <a href="#services"><i class='bx bxl-twitter'></i></a>
                        <a href="#portfolio"><i class='bx bxs-joystick'></i></a>
                    </div>
                </nav>
            </header>

            <h1 class="heading-text"><img src={process.env.PUBLIC_URL + '/bitcoin-logo.png'} /> TRACK YOUR FAVOURITE <img class="img-logo" src={process.env.PUBLIC_URL + '/ethereum-logo.png'} />
                <br /> <span>CRYPTOCURRENCIES</span></h1>
        </div>
    )
}

export default Header