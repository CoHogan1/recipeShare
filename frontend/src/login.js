import './App.css';
import React, { useState } from 'react';

function App() {
    const [auth, setAuth] = useState(0)






    return (
        <div className="users">
            <h1>handle Login</h1>

            <div className="">
                <form className="register form">

                    <label></label>
                    <input placeholder="Username"></input>

                    <label></label>
                    <input placeholder="Email"></input>

                    <label></label>
                    <input placeholder="password"></input>

                    <label></label>
                    <input placeholder="password check"></input>

                </form>
            </div>
            <div className="">
                <form className="login form">

                    <label></label>
                    <input placeholder="Email"></input>

                    <label></label>
                    <input placeholder="password"></input>

                </form>
            </div>


        </div>
    )
}
export default App;
