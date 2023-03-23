import { useState } from 'react';
import React from "react";
import House from "../components/House";
import 'reactjs-popup/dist/index.css'
import PopupInputHouse from "./PopupInputHouse.js";
import Housescreen from "./Housescreen";
import AddHouse from "../components/AddHouse.css"


function Homescreen() {
  
    const [buttonPopup, setButtonPopup] = useState(false);
    const [houses, setHouses] = useState([]);
    const [houseScreenOpened, setHouseScreenOpened] = useState(false);
    const [houseProps, setHouseProps] = useState();

    function submit(details) {
        setHouses([...houses, details]);
        console.log(details);
    }

    function handleOpenHouse(house) {
        setHouseProps(house);
        setHouseScreenOpened(true);
    }

    return (
      <div className="homePage">
        {houseScreenOpened ? <Housescreen house={houseProps} /> : <></>}
        <div>
           {houses.map((item) => (<House house={item} onClick={handleOpenHouse}/>))}
        </div>
        <button className="AddHouse" onClick={() => setButtonPopup(true)}>Add House</button>
        <PopupInputHouse setHouses={submit} trigger={buttonPopup} setTrigger={setButtonPopup}>

        </PopupInputHouse>
      </div>
    )
  } 
  
  export default Homescreen;

  