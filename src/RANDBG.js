import React, {useState} from "react";
function RANDBG(){
    const [color,setColor] = useState('#371B58')
    function Change(){
        setColor("#"+ Math.floor(Math.random()*16777215).toString(16))
    }

    return(
        <div>
            <div style={{backgroundColor:color,height:"500px",width:"300px"}}>

            </div>
                <button onClick={Change}>Random Color</button>
        </div>
        )
}

export default RANDBG;