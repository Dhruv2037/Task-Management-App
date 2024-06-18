import React,{useState,useEffect} from "react";
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";

const App = () =>{
  const [token,setToken] = useState(localStorage.getItem('token'));

  useEffect(()=>{
    if(token)
      localStorage.setItem('token',token);
    else
      localStorage.removeItem('token',token);
  },[token]);

  return(
    <div>
      {token?<Dashboard token={token} setToken={setToken}/> : <Auth setToken={setToken}/>}
    </div>
  )
};

export default App;