import { useState } from "react";

export default function(){

    // const [val, setVal] = useState("");
    // setVal("x");
    // console.log(val);
    // return(
    //     <h1> welcome </h1>
    // );
    // useState preserves state across re-renders.
    // val="" - val="x" - rerender - val="x" - rerender - val = "x" - rerender ...
    //------------------
//     
    const [c, setC] = useState(0);
    //console.log("C value : ", c);
    return(
        <button onClick={()=>{setC(c + 1); console.log("C value : ", c);}}>CLICK ME</button>
    );
    // u might think.. Initially c is 0.. and I clicked and c becomes 1 which is a change of a change SO It rerenders 
    // and then c is 0 again and I clicked it becomes 1 and rerender again and so on. Am I right? or not? why?
    // YOU ARE WRONG
    
    // The initial value (0) is only used on the first render. After that, React "remembers" the current state (1, 2, etc.) even during re-renders.
    // Re-renders don’t re-execute useState(0).
    // Here rerendering is in ur hands, when u click it rerenders but the above example.. It keeps rerenderinggg


}