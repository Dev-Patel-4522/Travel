import React, {useState} from "react";
import './App.css';

function PROPRCHG(){
    const [show,setShow] = useState(false);
    const [buttontext,setButtontext] = useState('show');
    const[text,setText] = useState('');

    function showHide(){
        setShow(!show);
        if( show === false)
        {
            setButtontext('Hide')
            setText('Hello Good Morning React.JS')
        }
        else{
            setButtontext('Show')
            setText(' ')
        }
    }
    
    return(
        <div>
            <button onClick={ showHide}>{buttontext}</button>
            <h1 className="H1">{text}</h1>
        </div>
    );
}
export default PROPRCHG;