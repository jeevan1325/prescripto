import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router"; // ✅ Correct import
import { Appcontext } from "../context/Appcontext";
import { assets } from "../assets/assets";
import ReletedDoc from "../components/ReletedDoc";

function Appointment() {
  const { docId } = useParams();
  const { doctors, currencysymbol } = useContext(Appcontext);
  const daysofweek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [docInfo, setdocInfo] = useState(null);
  const [docslot, setdocslot] = useState([]);
  const [slotIndex, setslotIndex] = useState(0);
  const [slottime, setslottime] = useState("");
  useEffect(() => {
    const fetchDocinfo = () => {
      const foundDoctor = doctors.find((doc) => doc._id === docId);
      setdocInfo(foundDoctor);
    };
    fetchDocinfo();
  }, [doctors, docId]);
  useEffect(() => {
    const getAvailableslot = async () => {
      setdocslot([]);
      let today = new Date();

      for (let i = 0; i < 7; i++) {
        let currentDate = new Date(today);
        currentDate.setDate(today.getDate() + i);

        let endtime = new Date();
        endtime.setDate(today.getDate() + i);
        endtime.setHours(21, 0, 0, 0);

        if (today.getDate() === currentDate.getDate()) {
          currentDate.setHours(
            currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
          );
          currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
        } else {
          currentDate.setHours(10);
          currentDate.setMinutes(0);
        }

        let timeSlots = [];

        while (currentDate < endtime) {
          let formattedTime = currentDate.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });

          timeSlots.push({
            datetime: new Date(currentDate),
            time: formattedTime,
          });

          currentDate.setMinutes(currentDate.getMinutes() + 30);
        }

        setdocslot((prev) => [...prev, timeSlots]);
      }
    };

    getAvailableslot();
  }, [docInfo]);

  // useEffect(() => {
  //   console.log(docslot);
  // }, [docslot]);

  return (
    docInfo && (
      <div>
        {/* doctors details */}
        <div className=" flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-blue-500 w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt="Doctor"
            />
          </div>
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            {/* doc info like name,degree */}
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}{" "}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </p>

            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}{" "}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>
            {/* About */}
            <div>
              <p className="flex items-center text-sm gap-1 mt-3 font-medium text-gray-600">
                About <img src={assets.info_icon} alt="" />{" "}
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            <p className="text-gray-500 font-medium mt-4 ">
              Appointment fee:{" "}
              <span className="text-gray-600">
                {currencysymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>
        {/* booking slot */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking slots</p>
          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {docslot.length &&
              docslot.map((item, index) => (
                <div
                  onClick={() => setslotIndex(index)}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                    slotIndex === index
                      ? "bg-blue-500 text-white"
                      : "border border-gray-200"
                  }`}
                  key={index}
                >
                  <p>
                    {item[0] && daysofweek[new Date(item[0].datetime).getDay()]}
                  </p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>
          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {docslot.length &&
              docslot[slotIndex].map((item, index) => (
                <p
                  onClick={() => setslottime(item.time)}
                  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                    item.time === slottime
                      ? "bg-blue-500 text-white"
                      : "text-gray-400 border border-gray-300"
                  }`}
                  key={index}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>
          <button className="bg-blue-500 text-white text-sm font-light px-14 py-3 rounded-full my-6">
            Book an appointment
          </button>
        </div>
        {/* listing reletive doc */}
        <ReletedDoc docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  );
}

export default Appointment;
