import React from 'react';
import Form from './Form';

export const TodoContext=React.createContext(null);
const MainPage=()=>{
    const [todos,setTodos]=React.useState([]);
    React.useEffect(()=>{
        fetch('https://merge-backend.herokuapp.com/gettodos')
        .then(res=>res.json())
        .then(data=>setTodos(data))
        .catch(err=>console.log("error get",err))
    },[])
    return (
    <TodoContext.Provider value={{todos,setTodos}}>
        <Form/>
    </TodoContext.Provider>
    );
}

export default MainPage;