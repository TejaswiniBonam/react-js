import {useState} from 'react';
export default function(){
    const [val, setVal] = useState(".");

    function clicked(){
        setVal("X");
        console.log("CLICKED");
    }
    return (
        <button onClick={clicked}>{val}</button>
    );
}