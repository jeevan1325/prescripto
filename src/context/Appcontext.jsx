import { createContext,useState, useEffect } from "react";
import {doctors} from "../assets/assets"
export const Appcontext = createContext()
import { toast } from "react-toastify";
import axios from "axios";
const Appcontextprovider = (props)=>{
 const currencysymbol = '$'
 const backendurl = import.meta.env.VITE_BACKEND_URL
 const [doctors, setDoctors] = useState([])
 const [token, settoken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):false)   
 const getDoctorsData = async () => {
    try {
      const { data } = await axios.get(backendurl + '/api/doctor/list');
  
      if (data.success) {
        setDoctors(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  
 useEffect(()=>{
getDoctorsData()
 },[])
 
 
 const value = {
        doctors,currencysymbol,token,settoken,backendurl
    }
    return(
        <Appcontext.Provider value={value} >
       {props.children}
        </Appcontext.Provider>
    )
}
export default Appcontextprovider;