import { useRef, useState } from "react"

 const InputRef = () => {

    const inputRef = useRef(null)


    return (
        <>
            <input ref={inputRef} style={{ border: '1px solid red' }} placeholder='Search some'/>
            <button onClick={() => console.log(inputRef)}>Get text</button>
        </>
    )
 }

 export default InputRef