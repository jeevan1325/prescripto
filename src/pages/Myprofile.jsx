import React, { useState } from "react";
import { assets, specialityData } from "../assets/assets";
import axios from "axios";
function Myprofile() {

    
    const [userdata, setuserdata] = useState({



    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "richardjameswap@gmail.com",
    phone: "+91 100020001",
    addres: {
      line1: "57th Cross, Richmond ",
      line2: "Circle, Church Road, London",
    },
    gender: "Male",
    Birthday: "20 July, 2024", 
  });
  const [isedit, setisedit] = useState(false);



  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm" >
      <img className="w-36 rounded" src={userdata.image} alt="" />
      {isedit ? (
        <input
        className="bg-gray-100 text-3xl font-medium max-w-50 mt-4"
          type="text"
          value={userdata.name}
          onChange={(e) =>
            setuserdata((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="font-medium text-3xl mt-4 text-neutral-800 " >{userdata.name}</p>
      )}
      <hr className="bg-zinc-400 h-[1px] border-none" />
      <div>
        <p className="text-neutral-500 underline mt-3 " >CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
        <p className="font-medium" >Email id:</p>
          <p className="text-blue-500" >{userdata.email}</p>
          <p className="font-medium" >Phone</p>
          {isedit ? (
            <input className="bg-gray-100 max-w-52" type="text" value={userdata.phone} />
          ) : (
            <p className="text-blue-400" >{userdata.phone}</p>
          )}
          <p className="font-medium" >Address:</p>
          {isedit ? (
            <p>
              {" "}
              <input
              className="bg-gray-50"
                type="text"
                value={userdata.addres.line1}
                onChange={(e) =>
                  setuserdata((prev) => ({
                    ...prev,
                    addres: { ...prev.addres, line1: e.target.value },
                  }))
                }
              />
              <br />
              <input
                            className="bg-gray-50"

                type="text"
                value={userdata.addres.line2}
                onChange={(e) =>
                  setuserdata((prev) => ({
                    ...prev,
                    addres: { ...prev.addres, line2: e.target.value },
                  }))
                }
              />
            </p>
          ) : (
            <p className="text-gray-500" >
              {userdata.addres.line1}
              <br />
              {userdata.addres.line2}
            </p>
          )}
        </div>
      </div>
      <div>
        <p className="text-neutral-500 underline mt-3" >BASIC INFORMATION</p>
        <div  className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700" >
          <p className="font-medium" >Gender</p>
          {isedit ? (
            <select
            className="bg-gray-100 max-w-20"
              value={userdata.gender}
              onChange={(e) =>
                setuserdata((prev) => ({ ...prev, gender: e.target.value }))
              }
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-400"  >{userdata.gender}</p>
          )}
          <p className="font-medium" >Birthday:</p>
          {isedit ? (
            <input
            className="max-w-28 bg-gray-100"
              value={userdata.Birthday}
              onChange={(e) =>
                setuserdata((prev) => ({ ...prev, Birthday: e.target.value }))
              }
              type="date"
            />
          ) : (
            <p className="text-gray-400" >{userdata.Birthday}</p>
          )}
        </div>
      </div>
      <div className="mt-10" >

        {
          isedit
           ?
           <button className="border border-blue-500 px-8 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-all" onClick={()=>setisedit(false)} >Save information</button> 
          : 
          <button  className="border border-blue-500 px-8 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-all " onClick={()=>setisedit(true)} >Edit</button>
        }
      </div>
    </div>
  );
}

export default Myprofile;
