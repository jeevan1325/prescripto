import React, { useContext ,useEffect} from "react";
import { useState } from "react";
import { Appcontext } from "../context/Appcontext";
import { toast } from "react-toastify";
import axios from 'axios'
import { useNavigate } from "react-router";
function Login() {
  const {backendurl,token,settoken} = useContext(Appcontext)
  const navigate = useNavigate()
  const [state, setstate] = useState("sign up");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  // const [showPassword, setShowPassword] = useState(false);
  const handlsumbit = async (event) => {
    event.preventDefault();
    try {
      if (state === "sign up") {
        const {data} = await axios.post(backendurl + '/api/user/register',{name,email,password})
        if(data.success){

        
          localStorage.setItem('token', data.token)
        settoken(data.token)

        }else{
          toast.error(data.message)

        }
      }else{
        const {data} = await axios.post(backendurl + '/api/user/login',{email,password})
        if(data.success){

        
          localStorage.setItem('token', data.token)
        settoken(data.token)

        }else{
          toast.error(data.message)

        }
      }
    } catch (error) {
      toast.error(error.message)
    }
  };


  useEffect(() => {
    if(token){
      navigate('/')
    }
 }, [token])
  
  return (
    <form onSubmit={handlsumbit} className="min-h-[80vh] flex items-center ">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-sm text-zinc-600 shadow-lg">
        <p className="text-2xl font-semibold">
          {state === "sign up" ? "Create Account" : "Login"}
        </p>
        <p>
          Please {state === "sign up" ? "sign up" : "login"} to book appointment
        </p>
        {state === "sign up" && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="w-full border border-zinc-300 p-2 m-1 rounded"
              type="text"
              onChange={(e) => setname(e.target.value)}
              value={name}
              required
            />
          </div>
        )}

        <div className="w-full">
          <p>Email</p>
          <input
            className="w-full border border-zinc-300 p-2 m-1 rounded"
            type="email"
            onChange={(e) => setemail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            className="w-full border border-zinc-300 p-2 m-1 rounded"
            type="password"
            onChange={(e) => setpassword(e.target.value)}
            value={password}
            required
          />
           
        </div>
        <button type="sumbit" className="w-full text-white bg-blue-500 py-2 rounded-md text-base">
          {state === "sign up" ? "Create Account" : "Login"}
        </button>
        {state === "sign up" ? (
          <p>
            {" "}
            Already have an account?{" "}
            <span
              onClick={() => setstate("Login")}
              className="text-blue-500 underline cursor-pointer"
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create an new account?{" "}
            <span
              onClick={() => setstate("sign up")}
              className="text-blue-500 underline cursor-pointer"
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
}

export default Login;
