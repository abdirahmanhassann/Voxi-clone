import './App.css';
import Home from './components/Home';
import PhonesPage from './components/PhonesPage';
import Simonly from './components/Simonly';
import PhoneDetails from './components/PhoneDetails';
import {BrowserRouter as Router ,Route,Routes,Link,Outlet}from 'react-router-dom'
import React, { lazy ,Suspense} from 'react'


function App() {

  return (
  <>
    <Router>
    <Routes>
      <Route  path='/' element={<Home/>}exact> </Route>
      <Route  path='/PhonesPage' element={<PhonesPage/>}exact></Route>
      <Route  path='/Simonly' element={<Simonly/>}exact></Route>
      <Route path="/PhonesPage/:name" element={<PhoneDetails/>} />
      
  {/* <Route  path= '/searched' element={<Searched /> }exact>
 </Route> */}
 </Routes>
 </Router>
</>
  );
}

export default App;
