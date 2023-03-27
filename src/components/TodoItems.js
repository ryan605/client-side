import React,{useState,useEffect} from "react";

function TodoItems(){

    let taskUrl = "http://localhost:5004/tasks"
    const[tasks, setTasks] = useState([])
    useEffect(() =>{
        fetch(taskUrl)
            .then((response)=>response.json())
            .then((data)=>{setTasks(data)})
    },[])

    let todos;
    todos = tasks.map((value)=>{
        return(
            <div className="card text-bg-light ms-2 mt-2 col-2">
            <div className="card-body">
                <div className="card-title">{value.title}</div>
                <h6 className="card-subtitle mb-2 text-muted"></h6>
                <p className="card-text">{value.description}</p>
                <h6 className="card-subtitle mb-2 text-muted">{"value.priority"}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{"value.status"}</h6>
            </div>
        </div>
        )
    })
      return(
        <div></div>
      )
    
}
export default TodoItems