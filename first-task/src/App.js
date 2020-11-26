import React,{useState} from 'react'
import './App.css';
import Header from './Header';
import Footer from './footer';
import  Exspence_tracker from './Exspence-tracker';


function App() {
  
   const [First_name,setFirst_name]=useState('')
     const [ Telephone,settelephone]=useState('')
   
    console.log(First_name,Telephone)
  
  return (
    <div className="App">
     <Footer />
     <Header />
     <Exspence_tracker />
    
     <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <input id="first_name" type="text" className="validate" onChange={(evt)=>setFirst_name(evt.target.value)}/>
          <label for="icon_prefix">First Name</label>
        </div>
        <div className="input-field col s6">
          <input id="icon_telephone" type="tel" className="validate" onChange={(evt)=>settelephone(evt.target.value)}/>
          <label for="icon_telephone">Telephone</label>
        </div>
      </div>
    </form>
  </div>
    </div>
    
  );
}

export default App;
