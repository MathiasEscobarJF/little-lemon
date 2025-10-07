import './Main.css';
import Home from './Home'
import About from './About';
import Menu from './Menu';
import Reservations from './Reservations';
import OrderOnline from './OrderOnline';
import Login from './Login';
import {Route,Routes} from 'react-router-dom';

function Main(){
    return(
        <main>
            <Routes>
                <Route path='/Home' element={<Home/>} />
                <Route path='/About' element={<About/>} />
                <Route path='/Menu' element={<Menu/>} />
                <Route path='/' element={<Reservations/>} />
                <Route path='/OrderOnline' element={<OrderOnline/>} />
                <Route path='/Login' element={<Login/>} />
            </Routes>
        </main>
    );
};

export default Main;