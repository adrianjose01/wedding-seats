import React, { useState } from "react";
import logo from "../assests/boda.svg";
import { AutoComplete } from "antd";
import guests from "../data/guest";

const HomeScreen = ({ onSelectGuest, onSelectTable }) => {
  const [selectedGuest, setSelectedGuest] = useState("");

  function onSubmitHandler() {
    if (!selectedGuest)
      return alert("Debe seleccionar su nombre para poder continuar");
    const guestTable = guests.find((g) => g.value === selectedGuest).mesa;
    onSelectTable(guestTable);
    onSelectGuest();
  }

  return (
    <div className="flex items-center justify-center flex-col h-dvh">
      <img src={logo} alt="Logo" className="w-40" />
      <h1 className="poppins-semibold text-2xl text-wed-blue mt-10">
        Encuentre su mesa
      </h1>
      <div className="flex flex-col m-4">
        <small className="text-wed-blue poppins-semibold">Nombre</small>
        <AutoComplete
          className="bg-grey rounded-md w-52"
          options={guests}
          filterOption={true}
          onSelect={(value) => {
            setSelectedGuest(value);
          }}
        />
      </div>
      <button
        onClick={onSubmitHandler}
        className="text-white bg-wed-blue px-5 py-1 rounded-md poppins-semibold text-sm shadow-sm m-8"
      >
        Buscar mesa
      </button>
    </div>
  );
};

export default HomeScreen;
