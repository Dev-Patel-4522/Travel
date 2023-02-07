import { useState } from "react";

export default function StyleChange()
{
    const [isColor,setColor] =useState(false)
    return( <div >
                <button onClick={()=> setColor(!isColor)}>Click Me</button>
                {
                    isColor && (<h1 className="my-style" >Hello World</h1>)
                }
            </div>
        
    );
}
// export default StyleChange;