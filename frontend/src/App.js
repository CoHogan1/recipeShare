import './App.css';
import React, { useState } from 'react';

import Form from './login.js'

function App() {
    console.log("getting data")
    let [data, setData] =  useState(null)
    const getData = async () => {
        try{
            const resp = await fetch('http://localhost:4000/users/database', {
                method: 'GET',
            })
            if (!resp.ok) {
                throw new Error(`Error! status: ${resp.status}`)
            }
            const result = await resp.json()
            //console.log(JSON.stringify(result, null))
            setData(result)
        } catch (err){
            console.log(err)
        }
    }


  return (
    <div className="App">
        <h1>frontend running</h1>

        <div className="data">
            <button onClick={getData}>get db</button>
            <h3>total database diaplayed below.</h3>
            <p>{data}</p>
        </div>

        <Form />

    </div>
  );
}

export default App;
