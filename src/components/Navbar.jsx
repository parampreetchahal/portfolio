import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
    const [showContact, setShowContact] = useState(false);

    const navigate = useNavigate();

    const handleMenuToggle = () => setMenuOpen(!menuOpen);
    const handleNavClick = () => setMenuOpen(false);

    const handleHomeClick = () => {
        handleNavClick();
        navigate("/"); // routes to App.jsx
    };

    const handleAboutClick = () => {
        handleNavClick();
        setShowAbout(true);
    };

    const handleContactClick = () => {
        handleNavClick();
        setShowContact(true);
    };

    const closePopup = () => {
        setShowAbout(false);
        setShowContact(false);
    };

    return (
        <>
            <nav className="navbar">
                {/* Left Logo */}
                <div className="logo-circle">PS</div>

                {/* Center Links */}
                <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <a onClick={handleHomeClick}>Home</a>
                    <a onClick={handleAboutClick}>About</a>
                    <a onClick={handleContactClick}>Contact</a>
                </div>

                {/* Right Resume Button */}
                <a
                    href="https://drive.google.com/uc?export=download&id=1i514guhRn9mBZuEvGBSizOPQr02HADPa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-btn"
                    onClick={handleNavClick}
                >
                    Download Resume
                </a>

                {/* Hamburger for Mobile */}
                <div
                    className={`hamburger ${menuOpen ? "active" : ""}`}
                    onClick={handleMenuToggle}
                >
                    <span></span><span></span><span></span>
                </div>
            </nav>

            {/* About Popup */}
            {showAbout && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup" onClick={(e) => e.stopPropagation()}>
                        <h2>About Me</h2>
                        <p>
                            I’m Parampreet Singh, a passionate developer skilled in AI, ML, and
                            full-stack web development. I love building interactive, scalable, and
                            data-driven projects that make real-world impact.
                        </p>
                        <button onClick={closePopup}>Close</button>
                    </div>
                </div>
            )}

            {/* Contact Popup */}
            {showContact && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup" onClick={(e) => e.stopPropagation()}>
                        <h2>Contact Me</h2>
                        <div className="social-icons">
                            <a href="mailto:parampreets537@gmail.com"><FaEnvelope /></a>
                            <a href="https://github.com/parampreetchahal" target="_blank"><FaGithub /></a>
                            <a href="https://linkedin.com/in/parampreet-singh23" target="_blank"><FaLinkedin /></a>
                            <a href="https://instagram.com/parampreetchahal" target="_blank"><FaInstagram /></a>
                        </div>
                        <button onClick={closePopup}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
