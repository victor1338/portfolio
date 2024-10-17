import React from 'react';
import {Link} from 'react-router-dom';

const Navbar =() =>(
    <div className='navBar'>
        <div className='Home'>
            <Link to="/">Home</Link>
        </div>
        <div className='AboutMe'>
            <Link to="/AboutMe">AboutMe</Link>
        </div>
        <div className='cart'>
            <Link to="/cart">Cart</Link>
        </div>
    </div>
    );

export default Navbar;