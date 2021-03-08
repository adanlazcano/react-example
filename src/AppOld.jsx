import './App.css';
import {useState} from 'react';
import {Message,Contador,Button,ButtonFun,ButtonReset,Small,Buttons,Notes} from './Elements';




const App = _ =>  {
   
  
 
    const [count,setCount] = useState(1);
    const [left,setLeft] = useState(0);
    const [right,setRight] = useState(0);
    const even = count % 2 === 0;
    let msg = even ? 'is pair':'isn´t pair'
   
    const reset = _=>{
        setCount(0);
        
    }
   
   const[counters,setCounters] = useState({
       left:0,
       right:0
   
   });
   
   const handleLeft = _=>{
   
       setCounters({
           left: counters.left + 1,
           right: counters.right
       })
   }
   
   const handleRight = _=>{
       setCounters({
           left: counters.left,
           right: counters.right + 1
       })
   }
   
   const greeting = 'Hello World';
 
   
    
    return ( 
      
       <div className = "App" >
       <Contador counter={counters.left + counters.right}></Contador>
       <Contador counter={count} />
        {greeting + ' adan'}
        <Message color="#1BB11B" msg="Green"/>
        <Message color="#00468B" msg="Blue"/>
        <Message color="#FF1493" msg="Pink"/>
        <Button count={count} setCount={setCount} />
        <ButtonFun setCount={setCount} />
        <ButtonReset clase="btn" fun={reset} />
        <Small msg={msg} />
        <br></br>
        <br></br>
        {left}&nbsp;&nbsp;
        <Buttons eve={setLeft} text="left" />
        <Buttons eve={setRight} text="right" />
        {right}&nbsp;&nbsp;
        <br></br>
        <br></br>
       {counters.left}&nbsp;&nbsp;
       <Buttons  fun={handleLeft} text="left" />
       <Buttons fun={handleRight} text="right" />
       {counters.right}&nbsp;&nbsp;
       <br></br><br></br>
       <Notes/>
<br></br><br></br>


        </div>
    );
    }

export default App;