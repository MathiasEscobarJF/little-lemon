import logoPrimary from '../images/logo-primary.png';
import './Nav.css'

function Nav(){
    return(
        <nav>
            <img src={logoPrimary} alt=""/>

            <ul>
                <li key='Home'><a href='./App.js'>Home</a></li>
                <li key='About'><a href='./App.js'>About</a></li>
                <li key='Menu'><a href='./App.js'>Menu</a></li>
                <li key='Reservations'><a href='./App.js'>Reservations</a></li>
                <li key='Order Online'><a href='./App.js'>Order Online</a></li>
                <li key='Login'><a href='./App.js'>Login</a></li>
            </ul>
        </nav>
    );
};

export default Nav;