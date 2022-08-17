import { useEffect, useState } from "react"
    
export default function Notes(){
    const [text, setText] = useState(() =>{
        const saveData = localStorage.getItem("bltJrnText")
        const initialValue = JSON.parse(saveData)
        return initialValue || ""
    })
    useEffect(()=>{
        localStorage.setItem("bltJrnText", JSON.stringify(text))
    }, [text])

    return(
        <div className="notes-container">
            <h2 className="notes-title">Notes</h2>
            <textarea placeholder="Whatever you type here will stay here for next time you come back..." onChange={(e)=>setText(e.target.value)} value={text}></textarea>
        </div>
    )
}