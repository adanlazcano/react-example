import {useState,useEffect} from 'react';


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

const N = ({id,title,body}) =>{

  return (
  <>
    <h3>{id}. {title}</h3>
  <p>
    {body}
  </p>

  </>

  )
};

const Form = ({notes,setNotes}) =>{
 
  const [newNote,setNewNote] = useState('');

  const handleChange = e =>{

    setNewNote(e.target.value);
  }

  const handleSubmit = e =>{
    e.preventDefault();

   fetch('https://jsonplaceholder.typicode.com/posts',
   {
     method:'POST',
     body: JSON.stringify({
      
       title:newNote,
       body:newNote,
       userId:1,
     }),
     headers:{
       'Content-type':'application/json; charset=UTF-8',
     },
   })
   .then(response=>response.json())
   .then(json=>setNotes([...notes,json]));

   
    // setNotes([...notes,createNote]);
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
 
    const [notes,setNotes] = useState([]);

    const [showAll,setShowAll] = useState(true);

    const[loading,setLoading] = useState(false);

    useEffect(_ => {

      console.log('useffect'); 
      setLoading(true);
      setTimeout(() => {
        console.log('now');
     
     try{
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response=>response.json())
      .then(json=>setNotes(json))
      console.log('notes');
      setLoading(false);
     }catch(error){
       console.log(error);
     }
     },2000);


    }, [])
 
   console.log('render');


    return (
            <div>
               <H1/>
               <ButtonShowAll showAll={showAll} setShowAll={setShowAll} />
                   
                   {loading?'Cargando.....':''}
                   <ol>
                    {
                    notes
                    .map(note=>
                      <N key={note.id} {...note} />
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






  
 
 








