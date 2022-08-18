import useHover from "../hooks/useHover"

const Todo = (props) => {
    const [hovered, ref] = useHover()

    let classes

    if(hovered){
        classes= "fa-solid fa-trash-can"
    }else{
        classes= "fa-solid fa-trash-can transparent"
    }

// when to transition to a textarea
    const elementToRender = props.text.length < 25 ? 
                            <input autoFocus onFocus={(e)=>{
                                const end = props.text.length
                                e.target.setSelectionRange(end, end)
                                e.target.focus()
                            }} className="todo-text-box" id={props.todoID} type="text" value={props.text} onChange={(e)=> props.updateText(e)} /> : 
                            <textarea autoFocus onFocus={(e)=>{
                                const end = props.text.length
                                e.target.setSelectionRange(end, end)
                                e.target.focus()
                            }} className="todo-text-box" id={props.todoID} value={props.text} onChange={(e)=> props.updateText(e)} />

    if(props.text.length > 15){
        
    }

    return (
        <div className="todo-container" ref={ref}>
            <input className="todo-checkbox" onChange={() => props.toggleCheckbox(props.todoID)} type='checkbox' checked={props.isChecked} />
            {elementToRender}
            <div className="trash-icon red-text">
                <i onClick={()=> props.removeTodo(props.todoID)} className={classes} />
            </div>
        </div>
    )
}

export default Todo