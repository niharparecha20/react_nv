import React ,{ useState } from "react";

export default function UseState3(){
    const [arr1, setArr1] = useState([10, 20, 30, 40, 50]);
    const [val1,setval1] = useState(0);
    const [val2,setval2] = useState(0);

    const addElement = (v1) => {
        setArr1([...arr1,v1]);
    };
    const removeElement = (v1) => {
        setArr1(arr1.filter((x)=> x !== v1 ));
    };

    const updateElement = (k1, v1) => {
    setArr1(arr1.map((x) => (x === k1 ? v1 : x)));
  };
    return(
        <>
        <h1>Array element are: {arr1.join(", ")}</h1>

        <br/>
        <input 
        type ="number"
        onChange={(e) => setval1(Number(e.target.value))}
        placeholder="Enter value to add"
        />
        <br/>
        <input 
        type="number"
        onChange={(e)=>setval2(Number(e.target.value))}
        placeholder="Enter value to remove / update"
        />
        <button onClick={()=>addElement(val1)}>Add</button>
        <button onClick={()=>removeElement(val2)}>remove</button>
        <button onClick={()=>updateElement(val1,val2)}>Update</button>
        </>
        
        
    );
}