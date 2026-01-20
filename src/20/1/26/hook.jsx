import React,{useState} from "react";

export default function HookExample(){
    const[count,setCount] =useState(0);
    const[name, setName] = useState("guest")
    const[checked,setChecked] = useState(false)
    return(
        <div>
            <input type="checkbox" checked = {checked} onChange={()=>setChecked(!checked)}
            />
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>decerement</button>
            <h1>Name:{name}</h1>
            <input type ="text"value={name}onChange={(e)=>setName(e.target.value)}/>{" "}
            
        </div>
    )
}
//all the hooks are function 