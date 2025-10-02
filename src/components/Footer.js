import logoSecondary from '../images/logo-secondary.png'

function Footer(){
    return(
        <footer>
            <img src={logoSecondary} alt=''/>
            
            <h4>Dormat Navigation</h4>
            <ul>
                <li key='Home'><a href='./App.js'>Home</a></li>
                <li key='About'><a href='./App.js'>About</a></li>
                <li key='Menu'><a href='./App.js'>Menu</a></li>
                <li key='Reservations'><a href='./App.js'>Reservations</a></li>
                <li key='Order Online'><a href='./App.js'>Order Online</a></li>
                <li key='Login'><a href='./App.js'>Login</a></li>
            </ul>

            <h4>Contact</h4>
            <ul>
                <li key='Adress'><a href='./App.js'>Adress</a></li>
                <li key='Phone number'><a href='./App.js'>Phone number</a></li>
                <li key='Email'><a href='./App.js'>Email</a></li>
            </ul>

            <h4>Social Media Links</h4>
            <ul>
                <li key='Adress'><a href='./App.js'>Adress</a></li>
                <li key='Phone number'><a href='./App.js'>Phone number</a></li>
                <li key='Email'><a href='./App.js'>Email</a></li>
            </ul>
        </footer>
    );
};

export default Footer;