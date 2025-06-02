import React from "react";
import { assets } from "../assets/assets";
function Footer() {
  return (
    <div className="md:mx-10 ">
      <div
        className="flex  flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr]
 gap-14 my-10 mt-40 text-sm"
      >
        {/* left section */}
        <div>
          <img className="mb-5 w-40 " src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industr 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book.
          </p>
        </div>
        {/* center section */}
        <div>
          <p className="mb-5 text-xl font-medium">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* right section */}
        <div>
          <p className="mb-5 text-xl font-medium">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>prescripto@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="text-gray-500" />
        <p className="text-center text-gray-600 text-sm py-5">
          Copyright © 2024 prescripto - All Right Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
