import { useState } from "react";
export default function ValidateEmail(){
    const [email, setEmail] = useState();
    const [validate, setValidate] = useState(false);
    function handleSubmit(e) 
    {
        setEmail(e.target.value);
        console.log(email);
        if(/^\w+([/.-]?\w+)@\w+([/.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            setValidate(true);
        } 
        else
        {
            setValidate(false);
        }
    }
    return (

        <>
            <h3>Submit Button Enables only when email is in format: example@domain.com</h3>
            <input placeholder="Enter Email" type="email" onChange={handleSubmit}/>
            <button type="submit" disabled={validate === false}> Submit </button>
            {/* Your Email is: {handleSubmit(email)} */}
        </>
    );
}