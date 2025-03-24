import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <div className='body'>
        <Routes>
          <Route index path='Menu' element={<Menu/>}></Route>
          <Route path='Cart' element={<Cart/>}></Route>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
