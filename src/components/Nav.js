import logoPrimary from '../images/logo-primary.png';
import './Nav.css'
import {Link} from 'react-router-dom';

function Nav(){
    return(
        <nav>
            <img src={logoPrimary} alt=""/>

            <ul>
                <Link key='Home' to='/Home'>Home</Link>
                <Link key='About'to='/About'>About</Link>
                <Link key='Menu' to='/Menu'>Menu</Link>
                <Link key='Reservations' to='/'>Reservations</Link>
                <Link key='Order Online' to='/OrderOnline'>Order Online</Link>
                <Link key='Login'to='Login'>Login</Link>
            </ul>
        </nav>
    );
};

export default Nav;