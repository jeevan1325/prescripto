import React, { useContext , useState, useEffect  } from 'react'
import { Appcontext} from '../context/Appcontext'
import { useNavigate } from "react-router";

function ReletedDoc({docId,speciality}) {
    const {doctors} = useContext(Appcontext)
    const [Redoc, setRedoc] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
   
    if (doctors.length > 0 && speciality) {
        const doctordata = doctors.filter((doc)=> doc.speciality === speciality && doc._Id !== docId )
        setRedoc(doctordata)
    }
   
    }, [doctors,docId,speciality])
    
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
    <h1 className="text-3xl font-medium">Related Doctors</h1>
    <p className="sm:w-1/2 text-center text-sm">
    Simply browse through our extensive list of trusted doctors.
    </p>
    <div className="w-full grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4 pt-5 gap-y-6 px-3 sm:px-0">
      {Redoc.slice(0, 5).map((items, index) => (
        <div
        key={index}
          onClick={() => {navigate(`/appointments/${items._id}`);scrollTo(0,0)}}
          className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
        >
          <img className="bg-blue-200" src={items.image} alt="" />
          <div className="p-4">
            <div className="flex items-center gap-2 text-sm text-center text-green-500">
              <p className="w-2 h-2 bg-green-500 rounded-full"></p>
              <p>Available</p>
            </div>
            <p className="text-gray-900 text-lg font-medium">{items.name}</p>
            <p className="text-gray-600 text-sm">{items.speciality}</p>
          </div>
        </div>
      ))}
    </div>
    <button
      onClick={() => {
        navigate("/doctors");
        scrollTo(0, 0);
      }}
      className="bg-blue-200 text-gray-600 px-12 py-3 rounded-full mt-10"
    >
      more
    </button>
  </div>
  )
}

export default ReletedDoc
