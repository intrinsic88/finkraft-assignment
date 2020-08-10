import React, { useEffect } from 'react';
import './App.css';
import UserComponent from './component/usercomponent';
import Navbar from './component/navbar/navbarcomponent';

function App() {
    useEffect(()=>{
        document.title = 'customers'
    })

    return (
        <div className="App">
            <Navbar />
            <UserComponent />   
        </div>
    );
}

export default App;