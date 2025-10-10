import { render, screen } from '@testing-library/react';
import App from './App';
import { ReservationsForm } from './components/Reservations';
import { initializeTimes,updateTimes} from './components/Main';


test('Renders the BookingForm heading', () => {
    render(<ReservationsForm availableTimes={['10:00']}/>);
    const headingElement = screen.getByText("Personal details");
    expect(headingElement).toBeInTheDocument();
})

test('initializeTimes', () => {
    const result = initializeTimes();
    expect(result).toEqual([]);
});

test('updateTimes should return the same state it receives', () => {
    const initialState = ['17:00', '17:30', '18:00'];
    const action = { }; // aunque el tipo no importa en esta implementación
    const result = updateTimes(initialState, action);
    expect(result).toBe(initialState); // mismo array, misma referencia
});

