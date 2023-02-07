import React, {useState,useEffect} from 'react';

function COUNTEREX(){
    const [count,setCount] = useState(0);
    useEffect(()=>{
        alert(`You clicked ${count} times`)
    });

    return(
        <div>
            <p>You Clicked {count} Times </p>
            <button onClick={()=>setCount(count+1)}> CLICK ME</button>
        </div>
    );
}

export default COUNTEREX;