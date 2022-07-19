import { useState } from 'react'

function Conditional() {
    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function sendEmail(e){
        e.preventDefault();
        setUserEmail(email);
        console.log(`Signed up`);
    }

    const clearEmail = (e) => {
        e.preventDefault();
        setUserEmail('');
    }

    return(
        <div>
            <h2>Sing up with your email</h2>
            <form>
                <input 
                    type="email" 
                    placeholder="Email Address" 
                    onChange = {(e) => setEmail(e.target.value)}
                />
                <button 
                    type = "submit" 
                    onClick = {sendEmail}
                > Sign In</button>
                {userEmail && (
                    <div>
                        <p>Signed up sucessfully with '{userEmail}'</p>
                        <button onClick = {clearEmail}>OK</button>
                    </div>
                )}
                


            </form>
        </div>
    )
}

export default Conditional;