import './App.css';
import Message from './Message';

const App = _ =>  {

    const greeting = 'Hello World';
    return ( 
        <div className = "App" >

        {greeting + ' adan'}

        <Message color="red" msg="red"/>
        <Message color="green" msg="green"/>
        <Message color="yellow" msg="yellow"/>

        </div>
    );
}

export default App;