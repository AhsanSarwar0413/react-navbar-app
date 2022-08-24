import React, { useState } from 'react'
import './Styles/Navbar.css'
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {

    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <nav className="main-nav">
                <div class="logo">
                    <h2>
                        <span>A</span>hsan
                        <span>A</span>pp
                    </h2>
                </div>

                {/* Second menu part */}

                <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                {/* Third Menu Part */}
                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li>
                            <a href="#">
                                <FaFacebookSquare className="facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <FaInstagramSquare className="instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <FaYoutubeSquare className="youtube" />
                            </a>
                        </li>
                    </ul>

                    {/* hamburger menu start */}
                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                        </a>
                    </div>
                </div>
            </nav>

            {/* hero section */}

            <section className="hero-section">
                <p>Weclome to</p>
                <h1>Ahsan Tech</h1>
            </section>
        </>
    )
}

export default Navbar;