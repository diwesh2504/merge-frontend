import React,{useContext} from 'react';
import {StatusContext} from './LandingPage';


const Composer=()=>{
    const [input,setInput]=React.useState("");
    const global=useContext(StatusContext);
   
    const gen_ID=(arr)=>{
        var min = 1;
          var max = 1000;
          var random = Math.floor(Math.random() * (+max + 1 - +min) + +min);
          if (arr.indexOf(random) == -1) {
            arr.push(random);
            return random;
          } else {
            gen_ID(arr);
          }
      }
    const handleSubmit=()=>{
        fetch('https://merge-backend.herokuapp.com/addstatus',{
            method:"POST",
            body:JSON.stringify({
                "id":gen_ID(global.status_id),
                "status":input
            }),
            headers:{
                "Content-type":"application/json; charset=UTF-8"
            }
        }).then(res=>res.json())
        .then(data=>global.setStatus(prev=>prev.concat(data)))
        setInput("");
        
    }
    return(
        <div className="card">
        
        <div className="card-body">
          <h5 className="card-title">What's on your mind?</h5>
          <div className="form-group">
            <textarea className="form-control" type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Let the world know..:)"></textarea>

          </div>
          
          <button className="btn btn-outline-dark" onClick={handleSubmit}>Add Status</button>
        </div>
      </div>
    );
}
export default Composer;
      