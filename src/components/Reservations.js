import './Reservations.css';
import restaurant from './../images/restaurant.jpg'
import { useState } from 'react';

function Reservations({availableTimes , dispatch , submitForm}){
    return(
        <>
            <header className='header-reservations'>
                <span>Little Lemon</span>
                <span>Chicago</span>
                <h1>Fill the form to reserve a table</h1>
                <div className='header-reservations-img-container'>
                    <img src={restaurant} alt='' />
                </div>
            </header>
            <ReservationsForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
        </>
    )
}

function ReservationsForm({availableTimes , dispatch , submitForm}){
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [telephoneNumber,setTelephoneNumber] = useState('');
    const [date,setDate] = useState('');
    const [time,setTime] = useState('');
    const [numberOfDiners,setNumberOfDiners] = useState('');
    const [occasion,setOccasion] = useState('');
    const [seatingOption,setSeatingOption] = useState('Indoor');
    const [confirmationMethod,setConfirmationMethod] = useState('Send me booking confirmation via text');
    const [comment,setComment] = useState('');

    const times = availableTimes.map(time => <option key={time} value={time}>{time}</option>);

    const handleDate = function(e){
        setDate(e.target.value);
        dispatch({type: e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();
        const  formData = {
            firstName: {firstName},
            lastName: {lastName},
            email: {email},
            telephoneNumber: {telephoneNumber},
            date: {date},
            time: {time},
            numberOfDiners: {numberOfDiners},
            occasion: {occasion},
            seatingOption: {seatingOption},
            confirmationMethod: {confirmationMethod},
            comment: {comment},
        }
        submitForm(formData);
    }

    return(
            <form className='form-reservations' onSubmit={handleSubmit}>
                <section>
                    <h3>Personal details</h3>
                    <div className='field required'>
                        <input type='text' placeholder='First Name' required value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                    </div>
                    <div className='field required'>
                        <input type='text' placeholder='Last Name' required value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                    </div>
                    <div className='field required'>
                        <input type='email' placeholder='Email' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className='field required'>
                        <input type='number' placeholder='Telephone Number' required value={telephoneNumber} onChange={(e)=>setTelephoneNumber(e.target.value)}/>
                    </div>
                </section>

                <section>
                    <h3>Booking details</h3>
                    {/* Agregar condicion de formato */}
                    <div className='field required'>
                        <input type='date' required value={date} onChange={handleDate}/>
                    </div>
                    {/* Agregar condicion de formato */}
                    <div className='field required'>
                        <select value={time} onChange={(e)=>setTime(e.target.value)}>
                            <option key='Time' value='' disabled>Time</option>
                            {times}
                        </select>
                    </div>
                    <div className='field required'>
                        <input type='number' placeholder='Number of diners' required value={numberOfDiners} onChange={(e)=>setNumberOfDiners(e.target.value)}/>
                    </div>
                    <div className='field required'>
                        <select value={occasion} onChange={(e)=>setOccasion(e.target.value)}>
                            <option key='Occasion' value='' disabled>Occasion</option>
                            <option key='Birthday' value='Birthday'>Birthday</option>
                            <option key='Engagement' value='Engagement'>Engagement</option>
                            <option key='Anniversary' value='Anniversary'>Anniversary</option>
                            <option key='Other' value='Other'>Other</option>
                        </select>
                    </div>
                    <fieldset>
                        <legend>Seating options   <span style={{color: 'red',}}>*</span></legend>
                        <div className='field radio'>
                            <label>
                                <input type='radio' name='Seating options' value='Indoor' required checked={seatingOption === 'Indoor'} onChange={(e)=>setSeatingOption(e.target.value)}/> Indoor
                            </label>
                        </div>
                        <div className='field radio'>
                            <label>
                                <input type='radio' name='Seating options' value='Outdoor' required checked={seatingOption === 'Outdoor'} onChange={(e)=>setSeatingOption(e.target.value)}/> Outdoor
                            </label>
                        </div>
                    </fieldset>
                </section>

                <section>
                    <h3>Confirmation details</h3>
                    <fieldset>
                        <legend>Confirmation method   <span style={{color: 'red',}}>*</span></legend>
                        <div className='field radio'>
                            <label>
                                <input type='radio' name='Confirmation method' value='Send me booking confirmation via text' required checked={confirmationMethod === 'Send me booking confirmation via text'} onChange={(e)=>setConfirmationMethod(e.target.value)}/> Send me booking confirmation via text
                            </label>
                        </div>
                        <div className='field radio'>
                            <label>
                                <input type='radio' name='Confirmation method' value='Send me booking confirmation via email' required checked={confirmationMethod === 'Send me booking confirmation via email'} onChange={(e)=>setConfirmationMethod(e.target.value)}/> Send me booking confirmation via email
                            </label>
                        </div>    
                    </fieldset>
                </section>

                <section>
                    <h3>Extra details</h3>
                    <div className='field optional'>
                        <textarea placeholder='Write a comment (optional)' value={comment} onChange={(e)=>setComment(e.target.value)}></textarea>
                    </div>
                </section>
                <button type="submit">Reserve the table</button>
            </form>
    );
};

export default Reservations;
export {ReservationsForm};