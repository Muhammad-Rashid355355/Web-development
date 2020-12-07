import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav id="navigation">
                <a href="#home" className="scroll"><img className="logo" alt="logo" src="images/logo1.png" /></a>
                <ul id="menu">
                    <li>
                        <a href="#home" className="scroll">Home</a>
                    </li>
                    <li className="current">
                        <a href="#profile" className="scroll">About Us</a>
                    </li>
                    <li>
                        <a href="#team" className="scroll">The Team</a>
                    </li>
                    <li>
                        <a href="#services" className="scroll">Services</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="scroll">Works</a>
                    </li>
                    <li>
                        <a href="#parallax-4" className="scroll">Blog</a>
                    </li>
                    <li>
                        <a href="#contact" className="scroll">contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
