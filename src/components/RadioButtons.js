import React from "react";

function Radio(props){

  const newGenre = props.newGenre;
  const changeRadio = props.changeRadio;

  return(
    <div>
      <h2>Radio external</h2>
      <div>
        <input
          type="radio"
          value="Happy"
          checked={newGenre === "Happy"}
          onChange={changeRadio}
        ></input>
        <label>Happy</label>
      </div>
      <div>
        <input
          type="radio"
          value="Sad"
          checked={newGenre === "Sad"}
          onChange={changeRadio}
        ></input>{" "}
        <label>Sad</label>
      </div>
      <div>
        <input
          type="radio"
          value="Scary"
          checked={newGenre === "Scary"}
          onChange={changeRadio}
        ></input>{" "}
        <label>Scary</label>
      </div>
      <div>
        <input
          type="radio"
          value="Mystery"
          checked={newGenre === "Mystery"}
          onChange={changeRadio}
        ></input>{" "}
        <label>Mystery</label>
      </div>
    </div>
  )
}
export default Radio;