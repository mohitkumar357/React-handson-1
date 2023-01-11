
import './App.css';
import Header from './Components/Header';
import Classcomp from './Components/Classcomp';
import Funccomp from './Components/Funccomp';
import React ,{useState} from 'react';

function App() {
const [clas, setCals]=useState(false);
const [fun, setFun]=useState(false);


  return (
    <div className="App">
     <Header/>
     
     <div className='button'>
     <button className='btnc' type="button" onClick={()=>setCals (!clas)}>To see Styling in Class Component</button>
     
     {clas&& <Classcomp/>}
     <>
     <button className='btnc' type="button" onClick={()=>setFun (!fun)}>To see Styling in Function Component</button>
     {fun && <Funccomp/>}
     </>
     </div>
    </div>
  );
}

export default App;
