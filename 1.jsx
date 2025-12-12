import React,{useState} from "react";
const Counter=()=>{
    const [count,setCount]=useState(0);
    const increment=()=>{setCount(count+1);}
    const decrement=()=>{setCount(count-1);}
    return(
        <div> Counter-State Variable
            <h3> {count} </h3>
            <button onClick={increment}>INC </button>
            <button onClick={decrement}>DEC</button>
        </div>
    )
}
export default Counter;