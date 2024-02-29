
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {BrowserRouter , Route , Routes} from 'react-router-dom';
import Users from './components/Users';
import Register from './components/Register';
import Update from './components/Update';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Home/>} />
          <Route path='/users' element ={<Users/>} />
          <Route path='/register' element ={<Register/>} />
          <Route path='/update/:id' element ={<Update/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
