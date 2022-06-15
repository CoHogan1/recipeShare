import './App.css';
import React, { useState } from 'react';

import Form from './user.js'

function App() {
    //console.log("app loaded");
    let [data, setData] =  useState([])

    const getData = async () => {
        console.log("getting data")
        try{
            const resp = await fetch('http://localhost:4000/api/users/database', {
                method: 'GET',
            })
            if (!resp.ok) {
                throw new Error(`Error! status: ${resp.status}`)
            }
            const result = await resp.json()
            //console.log(JSON.stringify(result, null))
            console.log(result);
            //setData(result)
        } catch (err){
            console.log(err)
        }
    }


  return (
    <div className="App">
        <h1>frontend running</h1>

        <div className="data">
            <button onClick={getData}>get db</button>
        </div>

        <Form />

    </div>
  );
}

export default App;
