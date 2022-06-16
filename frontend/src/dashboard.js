import './App.css';
import React, { useState } from 'react';

function App() {
    let [operator, setOp] = useState('bob')
    // let [list, setList] = useState( userList )
    let [mySearch, setMySearch] = useState('')

    const recipeSearch = (e) => {
        setMySearch(e.target.value)
    }

    const recipeFormSearch = (e) => {
        e.preventDefault()
    }





    return(
        <div className="dashboard">
            <p>Dashboard</p>

            <form onSubmit={recipeFormSearch}>
                <input className="searchbar"
                    placeholder="Search My recipies"
                    onChange={recipeSearch}
                    value={mySearch}></input>
                <input type="submit" value="find" className="find"/>
            </form>





            <div className="top-recipe">
                <h3>recent recipies</h3>
                <ul>
                    <li>recipe 1 name </li>
                    <li>recipe 2 name </li>
                    <li>recipe 3 name </li>
                    <li>recipe 4 name </li>
                    <li>recipe 5 name </li>
                </ul>

            </div>




        </div>
    )
}

export default App;
