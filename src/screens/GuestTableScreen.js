import React from "react";

const GuestTableScreen = ({ onBack, table }) => {
  return (
    <div className="bg-wed-blue h-dvh flex items-center justify-center flex-col">
      <p className="poppins-semibold text-white text-2xl">Número de mesa:</p>
      <p className="px-10 py-2 text-wed-blue text-xl m-5 mb-16 poppins-semibold bg-white rounded-md">
        {table}
      </p>
      <p className="poppins-light text-white w-56 text-center">
        Los números de cada mesa están ubicados en el centro.
      </p>
      <button
        onClick={onBack}
        className="bg-white py-2 px-6 rounded-md poppins-semibold text-sm text-wed-blue mt-6"
      >
        Atrás
      </button>
    </div>
  );
};

export default GuestTableScreen;
