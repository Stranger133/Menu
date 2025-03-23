import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Menu from './pages/Menu';
import About from './pages/About';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <div className='body'>
        <Routes>
          <Route path='Menu' element={<Menu/>}></Route>
          <Route path='About' element={<About/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
