import React from "react";

function Ramalan({ title }) {
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-base ">{title}</p>
      </div>
      <hr className="my-2" />

      <div
        className="flex flex-row items-center justify-between
      text-white"
      >
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">05:34 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            className="w-12 my-1"
            alt=""
          />
          <p className="font-medium">22°</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">06:34 PM</p>
          <img
            src="http://openweathermap.org/img/wn/02d@2x.png"
            className="w-12 my-1"
            alt=""
          />
          <p className="font-medium">23°</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">07:34 PM</p>
          <img
            src="http://openweathermap.org/img/wn/03d@2x.png"
            className="w-12 my-1"
            alt=""
          />
          <p className="font-medium">24°</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">08:34 PM</p>
          <img
            src="http://openweathermap.org/img/wn/04d@2x.png"
            className="w-12 my-1"
            alt=""
          />
          <p className="font-medium">25°</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">09:34 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01n@2x.png"
            className="w-12 my-1"
            alt=""
          />
          <p className="font-medium">26°</p>
        </div>
      </div>
    </div>
  );
}

export default Ramalan;
