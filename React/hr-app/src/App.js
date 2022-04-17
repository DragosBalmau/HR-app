import './App.css';

import {Home} from './Home';
import {Team} from './Team';
import {Employee} from './Employee';
import {Role} from './Role';
import {Navigation} from './Navigation';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
     <h3 className="m-3 d-flex justify-content-center">
       Bitdefender HR App
     </h3>

     <Navigation/>

     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/team' element={<Team/>}/>
       <Route path='/employee' element={<Employee/>}/>
       <Route path='/role' element={<Role/>}/>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
