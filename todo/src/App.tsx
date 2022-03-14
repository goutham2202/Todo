import React from 'react';
import './App.css';
import Header from './components/todo/todo'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Route,Routes} from 'react-router-dom'
import ApiList from './components/todo/api'
import Information from './components/todo/Information'
import Form from './components/todo/form'
function App() {
  return (
   
    <div className="App">
        <Routes>
       <Route path="/" element={<Header/>}></Route>
        <Route path='/api' element={<ApiList/>}/>
        <Route path='/api/user' element={<Information/>}/>
        <Route path='/api/add' element={<Form/>}/>
      </Routes>

    </div>
   
  );
}

export default App;
