import { useState } from "react";
export default function(){
    // So The flow goes like
    // we defines a state called val with ""
    // and then we changed, so it triggers rerender
    // and then val="" and val="x" rerender and iT GOES ONNNNNNNN
    const [val, setVal] = useState("");
    setVal("x");
    console.log(val);
    return(
        <h1> welcome </h1>
    );

}