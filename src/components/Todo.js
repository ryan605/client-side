import React,{useState} from "react";

function Todo(){
    let todoUrl = "http://localhost:5000/tasks"

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState('')
    const [status, setStatus] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        if(title!==""){
            const taskData = {title,description,priority,status}
            fetch(todoUrl,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(taskData)
            }).then((response)=>{
                // history('/todos')
            })
        }else{
            alert('name required')
    }
}
function getTitle(e){
    setTitle(e.target.value)
}
function getDescription(e){
    setDescription(e.target.value)
}
function getPriority(e){
    setPriority(e.target.value)
}
function getStatus(e){
    setStatus(e.target.value)
}
    

    return(
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <lable htmlFor="InputName" className="formname">{'Task Title'}</lable>
                <input type="text" value={title} onChange={getTitle} className="form-control" id="InputName"></input>
            </div>
            <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">{`Task Description`}</label>
            <textarea value={description} className="form-control" onChange={getDescription} id="descriptionFormControlTextarea1" rows="14"></textarea>
            <small value={priority} className="form-control"onChange={getPriority}>priority</small>
            </div>
        </form>  
    )
}
export default Todo