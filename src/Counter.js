import { useState } from "react";
import Buttons from "./Buttons.js";

export default function Counter() {
    const [count, setCount]= useState(0);
        function increase()
        {
            setCount(count=>count +1)
        }
        function decrease()
        {
            setCount(count=>count -1)
        }

    return(
            <>
                <div>
                    <h3>Example of Counter but the Increase and Decrease Buttons are in a child component. </h3>
                    <h1>
                        {count}</h1>
                    <Buttons
                    increase= {increase}
                    decrease= {decrease}
                    />
                    
                </div>
            </>
    )
}