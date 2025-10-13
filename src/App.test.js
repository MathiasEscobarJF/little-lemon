import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { ReservationsForm } from './components/Reservations';
import { initializeTimes,updateTimes} from './components/Main';

test('Renders the BookingForm heading', () => {
    render(<ReservationsForm availableTimes={['10:00']} dispatch={() => {}} submitForm={(formData) => true}/>);
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

test('Number of diners input has correct attributes', () => {
    render(<ReservationsForm availableTimes={['10:00']} dispatch={() => {}} submitForm={(formData) => true}/>);
    const input = screen.getByPlaceholderText('Number of diners');
    expect(input).toHaveAttribute('min', '1');
});

