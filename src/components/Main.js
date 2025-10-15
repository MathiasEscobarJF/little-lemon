import './Main.css';
import Home from './Home'
import About from './About';
import Menu from './Menu';
import Reservations from './Reservations';
import OrderOnline from './OrderOnline';
import Login from './Login';
import {Route,Routes,useNavigate} from 'react-router-dom';
import {useReducer} from 'react';
import {fetchAPI,submitAPI} from '../api';
import ConfirmReservation from './ConfirmReservation';

function updateTimes(availableTimes,action){
    const newDate = new  Date(action.type);
    return fetchAPI(newDate);
}

function initializeTimes(){
    const today = new Date();
    return fetchAPI(today);
}

function Main(){
    const navigate = useNavigate();

    function submitForm(formData){
    if(submitAPI(formData)){
        navigate('/ConfirmReservation');
    }
}

    const [availableTimes,dispatch] = useReducer(updateTimes,initializeTimes());

    return(
        <main>
            <Routes>
                <Route path='/' element={<Home availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
                <Route path='/About' element={<About/>} />
                <Route path='/Menu' element={<Menu />} />
                <Route path='/Reservations' element={<Reservations availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
                <Route path='/ConfirmReservation' element={<ConfirmReservation />} />
                <Route path='/OrderOnline' element={<OrderOnline/>} />
                <Route path='/Login' element={<Login/>} />
            </Routes>
        </main>
    );
};

export default Main;
export {initializeTimes,updateTimes}