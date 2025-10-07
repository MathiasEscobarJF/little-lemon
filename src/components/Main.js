import './Main.css';

function Main(){
    return(
        <main>
            <form>
                <section>
                    <h3>Personal details</h3>
                    <div className='field'>
                        <input type='text' placeholder='First Name' required />
                    </div>
                    <div className='field'>
                        <input type='text' placeholder='Last Name' required />
                    </div>
                    <div className='field'>
                        <input type='email' placeholder='Email' required />
                    </div>
                    <div className='field'>
                        <input type='text' placeholder='Telephone Number' required />
                    </div>
                </section>

                <section>
                    <h3>Booking details</h3>
                    {/* Agregar condicion de formato */}
                    <div className='field'>
                        <input type='text' placeholder='Date  mm/dd' required />
                    </div>
                    {/* Agregar condicion de formato */}
                    <div className='field'>
                        <input type='text' placeholder='Time hh:00 o hh:30' required />
                    </div>
                    <div className='field'>
                        <input type='number' placeholder='Number of diners' required />
                    </div>
                    <div className='field field-aux'>
                        <select>
                            <option disabled selected>Occasion</option>
                            <option>Birthday</option>
                            <option>Engagement</option>
                            <option>Anniversary</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <fieldset>
                        <legend>Seating options   <span style={{color: 'red',}}>*</span></legend>
                        <div className='field field-aux field-radio'>
                            <label>
                                <input type='radio' name='Seating options' value='Indoor' required /> Indoor
                            </label>
                        </div>
                        <div className='field field-aux field-radio'>
                            <label>
                                <input type='radio' name='Seating options' value='Outdoor' required /> Outdoor
                            </label>
                        </div>
                    </fieldset>
                </section>

                <section>
                    <h3>Confirmation details</h3>
                    <fieldset>
                        <legend>Confirmation method   <span style={{color: 'red',}}>*</span></legend>
                        <div className='field field-aux field-radio'>
                            <label>
                                <input type='radio' name='Confirmation method' value='Send me booking confirmation via text' required /> Send me booking confirmation via text
                            </label>
                        </div>
                        <div className='field field-aux field-radio'>
                            <label>
                                <input type='radio' name='Confirmation method' value='Send me booking confirmation via email' required /> Send me booking confirmation via email
                            </label>
                        </div>    
                    </fieldset>
                </section>

                <section>
                    <h3>Extra details</h3>
                    <div className='field field-aux'>
                        <textarea placeholder='Write a comment (optional)'></textarea>
                    </div>
                </section>
                <button type="submit">Reserve the table</button>
            </form>
        </main>
    );
};

export default Main;