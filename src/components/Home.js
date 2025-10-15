import './Home.css';
import homeHeaderImage from './../images/restauranfood.jpg';
import homeSpecials1 from './../images/greek-salad.jpg';
import homeSpecials2 from './../images/bruchetta.jpg';
import homeSpecials3 from './../images/lemon-dessert.jpg';
import brothersB from './../images/brothersB.jpg';
import {Link} from 'react-router-dom';
import OrderOnline from './OrderOnline.js';
import Reservations from './Reservations.js';
import About from './About.js';

function HomeHeader({availableTimes,dispatch,submitForm}){
    return (
        <header className="home-header home-section">
            <div className="home-header-content">
                <h1>Little Lemon</h1>
                <span>Chicago</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Link to='/Reservations' element={<Reservations availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />}>
                    <button className='enable'>Reserve a Table</button>
                </Link>
            </div>
            <div className="home-header-img-container">
                <img src={homeHeaderImage} alt=''/>
            </div>
        </header>
    )
}

function HomeSpecials(){
    return (
        <section className='home-specials home-section'>
            <h2>This weeks specials!</h2>
            <Link key='Menu' to='/Menu' style={{gridColumn: '7/9', alignSelf: 'center',}}>
                <button className='enable'>Online Menu</button>
            </Link>
            <SpecialsCard img={homeSpecials1} title={'Greek salad'} price={'$12.99'} description={'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. '} />
            <SpecialsCard img={homeSpecials2} title={'Bruchetta'} price={'$5.99'} description={'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. '} />
            <SpecialsCard img={homeSpecials3} title={'Lemon Dessert'} price={'$5.00'} description={'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'} />
        </section>
    )
}

function SpecialsCard({img,title,price,description}){
    return (
        <article className="specials-card">
            <img src={img} alt='' />
            <header>
                <h3>{title}</h3>
                <span>{price}</span>
            </header>
            <p>{description}</p>
            <Link className='specials-card-link' to='/OrderOnline' element={<OrderOnline />} >
                <button className='enable'>Order online</button>
            </Link>
        </article>
    )
}

function HomeTestimonials(){
    return (
        <section className='home-testimonials home-section'>
            <h2>Testimonials</h2>
            <div className="home-testimonials-card-container">
                <TestimonialsCard rating={'5/5'} nameReviewer={'Sofia Martinez'} reviewText={'An unforgettable dining experience. Every dish was bursting with flavor and beautifully plated. The atmosphere is cozy and the staff incredibly attentive. I’ll definitely be coming back!'}/>
                <TestimonialsCard rating={'5/5'} nameReviewer={'Julian Pereira'} reviewText={'Little Lemon is a hidden gem in Chicago. I tried the lemon basil pasta and it was phenomenal. Service was fast and friendly. Perfect spot for a romantic dinner.'}/>
                <TestimonialsCard rating={'4/5'} nameReviewer={'Camila Rodriguez'} reviewText={'Loved the vegetarian menu—creative and delicious options. The place has a relaxed, modern vibe. Just wish there were a few more dessert choices.'}/>
                <TestimonialsCard rating={'5/5'} nameReviewer={'Federico Gomez'} reviewText={'Excellent service from the moment we walked in. The chef even came out to greet us. We ordered the daily special and it was a flavor explosion. Highly recommended!'}/>
            </div>
        </section>
    )
}

function TestimonialsCard({rating,nameReviewer,reviewText}){
    return (
        <article className="testimonials-card">
            <header className='testimonials-card-header'>
                <h3>{rating}</h3>
                <p>{nameReviewer}</p>
            </header>
            <p>{reviewText}</p>
        </article>
    )
}

function HomeAbout(){
    return (
        <section className='home-about home-section'>
            <div className="home-about-content">
                <h2>Little Lemon</h2>
                <span>Chicago</span>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                <Link className='home-about-link' to='/About' element={<About />}>
                    <button className='enable'>About</button>
                </Link>
            </div>
            <div className="home-about-img-container">
                <img src={brothersB} alt='' />
            </div>
        </section>
    )
}

function Home({availableTimes,dispatch,submitForm}){
    return(
        <>
            <HomeHeader availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
            <HomeSpecials />
            <HomeTestimonials />
            <HomeAbout />
        </>
    )
}

export default Home;