import{useState,useEffect} from 'react';


import {useState} from 'react';
import Note from './Note';

const H1 = _ =>{
  return(
    <>
 <h1> Notes </h1>
 
    </>
  )
}

const ButtonShowAll = ({showAll,setShowAll})=>{

 

  const handleShowAll = _=>{
    setShowAll(_=>!showAll);

  
  }

  return (

    <button onClick={handleShowAll} className="btn">{showAll?'Show Importans':'Show All'}</button>
  )
}

const N = ({id,content,date}) =>{



  return (
  
  <p id={id} data-date={date}>
    {id}. {content}
  </p>

  )
};

const Form = ({notes,setNotes}) =>{
 
  const [newNote,setNewNote] = useState('');

  const handleChange = e =>{

    setNewNote(e.target.value);
  }

  const handleSubmit = e =>{
    e.preventDefault();

    const createNote ={

      id:notes.length +1,
      content:newNote,
      date:new Date().toISOString(),
      important: Math.random() <0.5
    }
   
    setNotes([...notes,createNote]);
    setNewNote('');
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={newNote} type="text"/>
      <button style={{color:'#282c34',marginLeft:'10px',padding:'2px 10px 2px 10px',cursor:'pointer'}}>New Note</button>
    </form>
    </>
  )
}

  export const Notes = _ =>{
 
    const [notes,setNotes] = useState(Note);

    const [showAll,setShowAll] = useState(true);
   


    return (
            <div>
               <H1/>
               <ButtonShowAll showAll={showAll} setShowAll={setShowAll} />
                   <ol>
                    {
                    notes
                    .filter(note=>showAll || note.important=== true)
                    .map(note=>
                      <N key={note.id} content={note.content} id={note.id} date={note.date} />
                    )
                  }
                  </ol>
                  <Form notes={notes} setNotes={setNotes}/>
            </div>
    )
  }

export const  Message = ({color,msg}) =><h1 style={{color:color}}>{msg}</h1>

export const Contador = ({counter}) =><h1>{counter}</h1>

export const Button  = ({count,setCount}) => <button className="btn" onClick={_=>setCount(count+1)}>Click</button>

export const ButtonFun = ({setCount}) => <button className="btn" onClick={_=>setCount(prev=>prev+1)}>Click Me!</button>

export const ButtonReset = ({fun,clase}) => <button className={clase} onClick={fun}>Reset</button>

export const Small = ({msg}) => <p>{msg}</p>

export const  Buttons = ({text,eve,fun}) => <button onClick={fun=== undefined?_=>eve(prev=>prev+1):fun} className="btn">{text}</button>



