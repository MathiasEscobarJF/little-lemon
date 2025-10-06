import './Main.css';

function Main(){
    return(
        <main>
            <form>
                <section>
                    <h3>Personal details</h3>
                    <div className='field'>
                        <input type='text' placeholder='First Name' />
                    </div>
                    <div className='field'>
                        <input type='text' placeholder='Last Name' />
                    </div>
                    <div className='field'>
                        <input type='text' placeholder='Email' />
                    </div>
                    <div className='field'>
                        <input type='text' placeholder='Telephone Number' />
                    </div>
                </section>

                <section>
                    <h3>Booking details</h3>
                    {/* Agregar condicion de formato */}
                    <div className='field'>
                        <input type='text' placeholder='Date  mm/dd' />
                    </div>
                    {/* Agregar condicion de formato */}
                    <div className='field'>
                        <input type='text' placeholder='Time hh:00 o hh:30' />
                    </div>
                    <div className='field'>
                        <input type='number' placeholder='Number of diners' />
                    </div>
                    <div className='field'>
                        <select>
                            <option disabled selected>Occasion</option>
                            <option>Birthday</option>
                            <option>Engagement</option>
                            <option>Anniversary</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <fieldset>
                        <legend>Seating options</legend>
                        <div className='field'>
                            <label>
                                <input type='radio' name='Seating options' value='Indoor' /> Indoor
                            </label>
                        </div>
                        <div className='field'>
                            <label>
                                <input type='radio' name='Seating options' value='Outdoor' /> Outdoor
                            </label>
                        </div>
                    </fieldset>
                </section>

                <section>
                    <h3>Confirmation details</h3>
                    <fieldset>
                        <legend>Confirmation method</legend>
                        <div className='field'>
                            <label>
                                <input type='radio' name='Confirmation method' value='Send me booking confirmation via text' /> Send me booking confirmation via text
                            </label>
                        </div>
                        <div className='field'>
                            <label>
                                <input type='radio' name='Confirmation method' value='Send me booking confirmation via email' /> Send me booking confirmation via email
                            </label>
                        </div>    
                    </fieldset>
                </section>

                <section>
                    <h3>Extra details</h3>
                    <div className='field'>
                        <textarea placeholder='Write a comment (optional)'></textarea>
                    </div>
                </section>
                <button type="submit">Reserve the table</button>
            </form>
        </main>
    );
};

export default Main;