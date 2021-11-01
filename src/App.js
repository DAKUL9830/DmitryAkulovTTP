
import './App.css';
import React,{useEffect,useState}from 'react';


function App() {
  const [clock,setClock]=useState()

 useEffect(()=>{
   setInterval(()=>{
    const date=new Date()
         setClock(date.toLocaleTimeString('fr-FR'))
   },1000)
 },[])


  return (
    <div className="App">
      <header className="App-header">
       
        <h1>Hellloooooo</h1>
         <br/>
         <h1>My name is Dmitry Akulov</h1>
         <br/>
         <h3>My favourite hobby is travelling and developing new apps.<br/>
         <br/>
           My last project is cryptocurrency with crypto wallet . <br/>
           <br/>
           Check this out :<p> <a className="hyper-link" href="https://glacial-beyond-97684.herokuapp.com/">Crypto Project</a></p>
           <br/>
           My GitHub:
           <br/>
           <p><a className="hyper-link" href="https://github.com/DAKUL9830">GitHub</a></p>
            <br/>
            Current Time:<br/>
            </h3>
         <div>{clock}</div>
         <br/>
         <br/>
      </header>

     
    </div>
      );
     
 
  
}

export default App;
