import React from "react";
import "../assets/list.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function List(props) {
  const items = props.listItems;
  const searchValue = props.searchValue;
 // const deleteDream = props.deleteDream(dream.key);
  return (
    <div>
      <section>
        {items.map((dream) => {
          if (
            searchValue !== "" &&
            dream.title.toLowerCase().indexOf(searchValue.toLowerCase()) === -1
          ) {
            return null;
          }
          return (
            <div id="dream-box" key={dream.key}>
              <input
                type="text"
                className="title-box"
                id={dream.key}
                value={dream.title}
                onChange={(e) => {
                  props.setUpdate(e.target.value, dream.key);
                }}
              ></input>
              <p>{dream.content}</p>
              <p id="typ">{dream.Genre}</p>
              <span onClick={() => props.deleteItem(dream.key)}>
                <FontAwesomeIcon className="faicon" icon="trash" />
              </span>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default List;
