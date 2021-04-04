import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return ( 
        <header>
            <Link to={'/'}>
                <img src="/img/logo.png" />
            </Link>
        </header>
     );
}
 
export default Header;