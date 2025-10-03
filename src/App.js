import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className='grid-container'>
      <Nav className='nav-primary'></Nav>
      <Header className='header'></Header>
      <Main className='main'></Main>
      <Footer className='footer'></Footer>
    </div>
  );
}

export default App;
