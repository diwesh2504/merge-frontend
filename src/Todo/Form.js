import React,{useContext} from 'react';
import { TodoContext } from './MainPage';
import List from './List';
const Form =()=>{
    const global=useContext(TodoContext);
    const [input,setInput]=React.useState("");
    let arr=[];
    function gen() {
        var min = 1;
        var max = 100;
        var random = Math.floor(Math.random() * (+max + 1 - +min) + +min);
        if (arr.indexOf(random) === -1) {
          arr.push(random);
          return random;
        } else {
          gen();
        }
      }
    const handleSubmit=(e)=>{
        fetch('https://merge-backend.herokuapp.com/addtodos',{
            method:"POST",
            body:JSON.stringify({
                "id":gen(),
                "title":input
            }),
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res=>res.json())
        .then(data=>global.setTodos(prev=>prev.concat(data)))
        .catch(err=>console.log("err add",err))
        
        setInput("");
    }
    return(
        <div className="container" style={{marginTop:"10px"}}>
            <div className="row">
                <div className="col"></div>
                <div className="col-6">
                <div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter tasks to be done.." value={input} onChange={(e)=>setInput(e.target.value)}></input>
                    </div>
                   <div className="form-group"> <button className="btn btn-success" onClick={handleSubmit}>Add Todo</button></div>
                    </div>
                <List/>
                </div>
                <div className="col"></div>
             
            </div>
        </div>
    );
}

export default Form;