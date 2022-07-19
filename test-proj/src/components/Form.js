import  { useState } from 'react'

function Form () {
    
    function login(e){
        e.preventDefault();
        console.log(`User '${username}' logged in successfully with the password '${password}'`);
    }

    const [username, setUsername] = useState('User')
    const [password, setPassword] = useState('1234')

    return (
        <div>
            <h1>Form:</h1>
            <form onSubmit={login}>
                <div>
                    <label htmlFor="name">Username  </label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Enter your name"e
                        onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password  </label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Login" />
                </div>
                
            </form>
        </div> 
    )

}

export default Form;