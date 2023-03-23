import React from "react";

function Housescreen(props){
    return (
        <div class="test">
            <h1>{props.house.name}</h1>
            <button className="AddHouse">Add Room</button>
        </div>
    );
}
export default Housescreen;