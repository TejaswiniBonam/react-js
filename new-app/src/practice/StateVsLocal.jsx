import { useState } from "react";

export default function(){
    //let idx = 0;
    const [idx, setIdx] = useState(0);
    console.log(idx);
    const arr = ['a', 'b', 'c', 'd']
    // THE BELOW CODE DOESN"T UPDATE h1 content BECUZ idx is a local element and To change h1 content
    // React should rerender But change in local varaible can't be noticed by react so it doesn't rerenders SO U SHOULD USE STATE
    return(
        <>
        <button onClick = {()=>{
            //idx+=1;
            setIdx(idx + 1);
            console.log(idx);}}>
            Click Me
        </button>
        <h1> HI This is {arr[idx]}</h1>
        </>

    );
}