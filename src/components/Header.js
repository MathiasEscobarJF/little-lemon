import './Header.css';
import restaurant from './../images/restaurant.jpg'

function Header(){
    return(
        <header>
            <span>Little Lemon</span>
            <span>Chicago</span>
            <h1>Fill the form to reserve a table</h1>
            <div className='header-img-container'>
                <img src={restaurant} alt='' />
            </div>
        </header>
    );
};

export default Header;