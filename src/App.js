import { useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import GuestTableScreen from "./screens/GuestTableScreen";

function App() {
  const [isGuestSelected, setIsGuestSelected] = useState(false);
  const [guestTable, setGuestTable] = useState();

  function onBackHandler() {
    setIsGuestSelected(false);
  }

  function onSelectGuestHandler() {
    setIsGuestSelected(true);
  }

  function onSelectGuestTableHandler(table) {
    setGuestTable(table);
  }

  return !isGuestSelected ? (
    <HomeScreen
      onSelectGuest={onSelectGuestHandler}
      onSelectTable={onSelectGuestTableHandler}
    />
  ) : (
    <GuestTableScreen onBack={onBackHandler} table={guestTable} />
  );
}

export default App;
