import React,{useContext} from 'react';
import { TodoContext } from './MainPage';

const List=()=>{
    const global=useContext(TodoContext);
    
    const handleDelete=(e)=>{

        let id=+e.target.id;
        console.log(id);
        fetch(`https://merge-backend.herokuapp.com/deletetodos/${id}`)
        .then(res=>res.json())
        .then(data=>{console.log(data);global.setTodos(prev=>prev.filter((item)=>{
            return item._id!==id;
        }))})
        .catch(err=>console.log(err))
        
    }
    
    
    return(
        <>
        <h4>No.of Tasks:{global.todos.length}</h4>
        <ul className="list-group">
           {global.todos.map((item,index)=>{
               return(
                
                <li key={item._id} className="list-group-item">{item.title}
                <span className="float-right"><button id={item._id} className="btn btn-outline-danger" onClick={handleDelete}>Delete</button></span>
                </li>
               );
            })}   
        </ul>
        </>
    );
}

export default List;