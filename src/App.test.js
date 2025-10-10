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
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
});

test('updateTimes should return the same state it receives', () => {
    const initialState = [];
    const action = {type: '2004-03-17'};
    const result = updateTimes(initialState, action);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
});

