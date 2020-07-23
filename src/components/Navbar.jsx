import React from 'react';
//компонента-это ф-ция, которая возвращает разметку.
const Navbar = () => {
    return (
        <nav className="navbar">
            <div><a href="">Profile</a></div>
            <div><a href="">Messenges</a></div>
            <div><a href="">News</a></div>
            <div><a href="">Music</a></div>
            <div><a href="">Settings</a></div>
        </nav>
    );
}

export default Navbar;