import './App.css';
import React, { useState } from 'react';

function App() {
    const [auth, setAuth] = useState(0)
    let [log, setLog] = useState({})
    let [reg, setReg] = useState(null)
    // reg form
    let [userName, setUserName] = useState('')
    let [email,    setEmail]    = useState('')
    let [password, setPassword] = useState('')
    let [password2, setPassword2] = useState('')
    // login form
    let [emailLog, setEmailLog] = useState('')
    let [passLog, setPassLog] = useState('')


    const [error, setError] = useState('')

    const clearForm = () => {
        setUserName('')
        setEmail('')
        setPassword('')
        setPassword2('')
        setEmailLog('')
        setPassLog('')
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("submitted");
    }

    const checkPass = () => {
        console.log("checking pass");
        if (password === password2 && password !== '' && password2 !== ''){
            return true
        } else {
            setError('Passwords Do not Match :(')
        }
    }



    const login = async (e) => {
        console.log('login route')
        e.preventDefault()
        try{
            const resp = await fetch('http://localhost:4000/api/users/login', {
                //credentials: 'include',
                method: 'POST',
                body: JSON.stringify({
                    email:    emailLog,
                    password: passLog,
                }),
                headers: {
                  'Content-Type' : 'application/json',
                }
            })
            if (!resp.ok) {
                throw new Error(`Error! status: ${resp.status}`)
            }
            const result = await resp.json()
            //console.log(JSON.stringify(result, null))
            console.log(result, " this is the logged in user.");
            clearForm()
            //setLog(result)
        } catch (err){
            console.log(err)
        }
    }

    const register = async (e) => {
        console.log(email, password, userName);
        e.preventDefault()
        console.log('register route')
        try{
            const resp = await fetch('http://localhost:4000/api/users/reg', {
                //credentials: 'include',
                method: 'POST',
                body: JSON.stringify({
                    email:    email,
                    username: userName,
                    password: password,
                }),
                headers: {
                  //'Content-Type' : 'application/x-www-form-urlencoded',
                  'Content-Type' : 'application/json',
                }
            })
            if (!resp.ok) {
                throw new Error(`Error! status: ${resp.status}`)
            }
            const result = await resp.json()
            console.log(result, "here")
            //setReg(result)
            clearForm()
        } catch (err){
            console.log(err)
        }
    }






    return (
        <div className="users">
            <h1>user control</h1>
            <p>error:{error}</p>

            <div className="">
                <form className="register form" onSubmit={register}>

                    <input placeholder="Username" onChange={e => setUserName(e.target.value)}
                        name="userName" value={userName}></input>

                    <input placeholder="Email" onChange={e => setEmail(e.target.value)}
                        name="email" value={email} ></input>

                    <input placeholder="password" type="password"
                        onChange={e => setPassword(e.target.value)}
                        name="password" value={password}></input>

                    <input placeholder="password check" type="password"
                        onChange={e => setPassword2(e.target.value)}
                         value={password2}></input>

                    <input type="submit" value="Register"/>

                </form>
            </div>

            <div className="">
                <form className="login form" onSubmit={login}>

                    <input placeholder="Email" onChange={e => setEmailLog(e.target.value)}
                        name="email" value={emailLog} ></input>

                    <input placeholder="password" type="password"
                        onChange={e => setPassLog(e.target.value)}
                        name="password" value={passLog}></input>

                    <input type="submit" value="Login"/>

                </form>
            </div>


        </div>
    )
}
export default App;
