import React from 'react';
import './PopupInputRoom.css';
import { useState } from 'react';

function PopupInputRoom(props) {

    const [details, setDetails] = useState({
        name: "",
    })


    const handleChange = (e) => {
        const {name, value} = e.target;
        setDetails((prev) => {
            return {...prev,[name]: value};
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.setHouses(details);
    }

  return (props.trigger) ? (
    <div className="popup">
        <div className="popup-inner">
            <form onSubmit={handleSubmit}>
                <h3>Name Room:</h3> <input type='text' name="name" onChange={handleChange}/>
                <button className="submit" type='submit'>Submit</button>
            </form>
            <button className="close-btn" onClick={() => props.setTrigger(false)}>Back</button>
            { props.children }
        </div>
    </div>
  ) : "";
}
export default PopupInputRoom;