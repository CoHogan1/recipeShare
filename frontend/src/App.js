import './App.css';
import React, { useState } from 'react';

import Form from './login.js'

function App() {
    let [data, setData] =  useState(null)

    const getData = async () => {
        console.log("getting data")

        try{

            const resp = await fetch('http://localhost:4000/users/database', {
                method: 'GET',

            })
            if (!resp.ok) {
                throw new Error(`Error! status: ${resp.status}`)
            }
            const result = await resp.json()
            console.log(JSON.stringify(result, null))

            setData(result)

        } catch (err){
            console.log(err)
        }
    }


  return (
    <div className="App">
        <h1>running</h1>
        <button onClick={getData}>get db</button>
        <Form />

        <div className="data">
            <h3>here it is.</h3>
            <p>{data}</p>

        </div>

    </div>
  );
}

export default App;
