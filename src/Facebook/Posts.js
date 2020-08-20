import React, { useContext } from 'react';
import {StatusContext} from './LandingPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import {faTags} from '@fortawesome/free-solid-svg-icons'


const Posts=()=>{
    const global=useContext(StatusContext);
    const handleLikes=(e)=>{
        let idx=+e.target.id;
        console.log("button id",idx);
        fetch(`https://merge-backend.herokuapp.com/likes/${idx}`)
        .then(res=>res.json())
        .then(data=>{
            global.setStatus(prev=>prev.map((item)=>{
                return idx==item._id ? {...data}:{...item}
            }))})
        
        .catch(err=>console.log(err))
    }
    React.useEffect(()=>{
        console.log("Refreshing...")
        
    },[])
    return(
        <div>
        {global.status.map((item,index)=>{

            return(
                <div className="card" style={{marginTop:"10px"}}>
                    
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">Status {index+1}&nbsp;<FontAwesomeIcon icon={faTags} /></h6>
                        <p>{item.status}</p>
                        <button id={item._id} onClick={handleLikes}className="btn btn-outline-info ">{item.likes}&nbsp;<FontAwesomeIcon icon={faThumbsUp} /></button>
                    </div>
                </div>
            )
        })}
        </div>
    );

}

export default Posts;