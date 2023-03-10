import { useState } from "react";
export default function  Factorial(){
    const [num,setNum] = useState();

    function factorial(n)
    {
        var result = n;
        if(n<0){
            return null;
        }
        if (n === 0 || n === 1){
            return 1;
        } else{
            while (n>=2){
                result = result * (n-1);
                n--;
            }
            return result;
        }
    }
    return(
        <>
            <h3>Write positive number and get its factorial below</h3>
            <input type="number" onChange={(e) => setNum(e.target.value)} /><br></br>
            Factorial: {factorial(num)}
        </>
    )
}