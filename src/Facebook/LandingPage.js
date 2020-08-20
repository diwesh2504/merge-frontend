import React from "react";
import Composer from "./Composer";
import Posts from "./Posts";
export const StatusContext=React.createContext(null);
const LandingPage = () => {
    const [status,setStatus]=React.useState([]);
    const [status_id,setStatus_id]=React.useState([]);
  React.useEffect(()=>{
     fetch('https://merge-backend.herokuapp.com/getstatus')
     .then(res=>res.json())
     .then(data=>setStatus(data))
     .catch(err=>console.log("err status get",err))
     setStatus_id(data=>data.map((item,idx)=>{
         return status[idx]._id;
     }))
  },[])
  
  return (
    <div className="container" style={{ marginTop: "10px" }}>
      <div className="row">
        <div className="col"></div>
        <div className="col-6">
        <StatusContext.Provider value={{status,setStatus,status_id,setStatus_id}}>
          <Composer/>
          <Posts/>
        </StatusContext.Provider>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};
export default LandingPage;
