import React from "react";

const TombolAtas = ({ setQuery }) => {
  const kota = [
    {
      id: 1,
      nama: "Medan",
    },
    {
      id: 2,
      nama: "Semarang",
    },
    {
      id: 3,
      nama: "Bali",
    },
    {
      id: 4,
      nama: "Makassar",
    },
    {
      id: 5,
      nama: "Jakarta",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6 text-xl  ">
      {kota.map((kt) => (
        <button
          key={kt.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: kt.nama })}
        >
          {kt.nama}
        </button>
      ))}
    </div>
  );
};

export default TombolAtas;
