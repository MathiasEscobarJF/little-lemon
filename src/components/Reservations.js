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
    const [formState,setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        telephoneNumber: '',
        date: '',
        time: '',
        numberOfDiners: '',
        occasion: '',
        seatingOption: 'Indoor',
        confirmationMethod: 'text',
        comment: '',
    })

    const times = availableTimes.map(time => <option key={time} value={time}>{time}</option>);

    function isInvalidNumberOfDiners(){
        if(formState.numberOfDiners === ''){
            return false;
        }
        return Number(formState.numberOfDiners) < 1;
    }

    function isInvalidDate(){
        if(formState.date === ''){
            return false;
        }
        const today = new Date().toISOString().split("T")[0];
        return formState.date < today;
    }

    function isDisabled(){
        return (formState.firstName === '') || (formState.lastName === '') || (formState.email === '') || (formState.telephoneNumber === '') || (formState.date === '') || (isInvalidDate())  || (formState.time === '') || (formState.numberOfDiners === '') || (Number(formState.numberOfDiners) < 1) || (formState.occasion === '');
    }

    function handleChange(e){
        setFormState(prev => ({...prev , [e.target.name]: e.target.value}));
    }

    function handleDate(e){
        handleChange(e);
        dispatch({type: e.target.value});
    }

    function handleSubmit(e){
        console.log(formState);
        e.preventDefault();
        submitForm(formState);
    }

    return(
            <form className='form-reservations' onSubmit={handleSubmit}>
                <section>
                    <h3>Personal details</h3>
            {/*First name */}
                    <div className='field required'>
                        <label>First name:
                            <input type='text' required value={formState.firstName} name='firstName' onChange={handleChange}/>
                        </label>      
                    </div>
            {/*Last name */}
                    <div className='field required'>
                        <label>Last Name:
                            <input type='text' required value={formState.lastName} name='lastName' onChange={handleChange}/>
                        </label>
                    </div>
            {/*Email */}
                    <div className='field required'>
                        <label>Email:
                            <input type='email' required value={formState.email} name='email' onChange={handleChange}/>
                        </label>
                    </div>
            {/*Telephone number */}
                    <div className='field required'>
                        <label>Telephone number:
                            <input type='number' required value={formState.telephoneNumber} name='telephoneNumber' onChange={handleChange}/>
                        </label>
                    </div>
                </section>

                <section>
                    <h3>Booking details</h3>
            {/*Date */}
                    <div className='field required'>
                        <label>Date: {isInvalidDate() && <span style={{color: 'red'}}>Select today or a future date.</span>}
                            <input type='date' required value={formState.date} name='date' onChange={handleDate} />
                        </label>
                    </div>
            {/*Time */}
                    <div className='field required'>
                        <label>Time:
                            <select value={formState.time} name='time' onChange={handleChange} required >
                                <option key='Time' value='' disabled>Time</option>
                                {times}
                            </select>
                        </label>
                    </div>
            {/*Number of diners */}
                    <div className='field required'>
                        <label>Number of diners: {isInvalidNumberOfDiners() && <span style={{color: 'red'}}>Select a number greater than or equal to 1.</span>}
                            <input type='number' required value={formState.numberOfDiners} name='numberOfDiners' onChange={handleChange} min='1' />
                        </label>
                    </div>
            {/*Occasion */}
                    <div className='field required'>
                        <label>Ocassion:
                            <select value={formState.occasion} name='occasion' onChange={handleChange} required >
                                <option key='Occasion' value='' disabled>Occasion</option>
                                <option key='Birthday' value='Birthday'>Birthday</option>
                                <option key='Engagement' value='Engagement'>Engagement</option>
                                <option key='Anniversary' value='Anniversary'>Anniversary</option>
                                <option key='Other' value='Other'>Other</option>
                            </select>
                        </label>
                    </div>
            {/*Seating option*/}
                    <fieldset>
                        <legend>Seating options   <span style={{color: 'red',}}>*</span></legend>
                        <div className='field radio'>
                            <label>
                                <input type='radio' name='seatingOption' value='Indoor' required checked={formState.seatingOption === 'Indoor'} onChange={handleChange}/> Indoor
                            </label>
                        </div>
                        <div className='field radio'>
                            <label>
                                <input type='radio' name='seatingOption' value='Outdoor' required checked={formState.seatingOption === 'Outdoor'} onChange={handleChange}/> Outdoor
                            </label>
                        </div>
                    </fieldset>
                </section>

                <section>
                    <h3>Confirmation details</h3>
            {/*Confrmation method */}
                    <fieldset>
                        <legend>Confirmation method   <span style={{color: 'red',}}>*</span></legend>
                        <div className='field radio'>
                            <label>
                                <input type='radio' name='confirmationMethod' value='text' required checked={formState.confirmationMethod === 'text'} onChange={handleChange}/> Send me booking confirmation via text
                            </label>
                        </div>
                        <div className='field radio'>
                            <label>
                                <input type='radio' name='confirmationMethod' value='email' required checked={formState.confirmationMethod === 'email'} onChange={handleChange}/> Send me booking confirmation via email
                            </label>
                        </div>    
                    </fieldset>
                </section>

                <section>
                    <h3>Extra details</h3>
            {/*Comment*/}
                    <div className='field optional'>
                        <label>Comment: (optional)
                            <textarea name='comment' value={formState.comment} onChange={handleChange}></textarea>
                        </label>
                    </div>
                </section>
                {isDisabled() && <span style={{color: 'red'}}>The button is disabled. Complete the form to submit.</span>}
                <button className={isDisabled() ? 'disable' : 'enable'} disabled={isDisabled()} type="submit" aria-label="On Click">Reserve the table</button>
            </form>
    );
};

export default Reservations;
export {ReservationsForm};