import {useState,useEffect} from 'react';


const H1 = _ =>{
  return(
    <>
 <h1> Notes from REST API </h1>
 
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

const N = ({id,content}) =>{

  return (
  <>
    <h3>{id}. {content}</h3>


  </>

  )
};

const Form = ({notes,setNotes}) =>{
 
  const [newNote,setNewNote] = useState('');

  const handleChange = e =>{

    setNewNote(e.target.value);
  }

  const handleSubmit = async e =>{
    e.preventDefault();

   const res = await fetch('http://localhost:3001/notes',
   {
     method:'POST',
     body: JSON.stringify({
      
      
       content:newNote,
      
     }),
     headers:{
       'Content-type':'application/json; charset=UTF-8',
     },
   })
   const data = await res.json();
   setNotes(data);
   
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

      const fetchData = async _ =>{
        try{
         const res  = await fetch('http://localhost:3001/notes')
         const data = await res.json();
         setNotes(data);
         console.log('notes');
         setLoading(false);
       }catch(error){
         console.log(error);
       } 
      }
     
      setTimeout(() => {

        fetchData();
        console.log('now');
       
     },2000);

  
    }, [])

  
 
   console.log('render');


    return (
            <div>
               <H1/>
               <ButtonShowAll showAll={showAll} setShowAll={setShowAll} />
                   
                  
                   <ol>
                      {loading?'Cargando.....':''}
                    {
                    notes
                    .filter(note=>showAll||note.important===true)
                    .map(note=>
                      <N key={note.id} {...note} />
                    )
                  }
                  </ol>
                  <Form notes={notes} setNotes={setNotes}/>
            </div>
    )
  }







  
 
 








