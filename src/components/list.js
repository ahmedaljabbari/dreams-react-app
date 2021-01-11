import React from "react";
import "../assets/list.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function List(props) {
  const items = props.listItems;
  const searchValue = props.searchValue;
  // const deleteDream = props.deleteDream(dream.key);
  return (
    <div>
      <section id="flexer">
        {items.map((dream) => {
          if (
            searchValue !== "" && 
            dream.title.toLowerCase().indexOf(searchValue.toLowerCase()) === -1 &&
            dream.content.toLowerCase().indexOf(searchValue.toLowerCase()) === -1
          ) {
            return null;
          }
          return (
            <div id="dream-box" key={dream.key}>
              <input
                disabled
                type="text"
                id="title-box"
                className={dream.key}
                value={dream.title}
                onChange={(e) => {
                  props.setUpdate(e.target.value, dream.key);
                }}
              ></input>
              <textarea
                id="txt-area"
                disabled
                value={dream.content}
                className={dream.key}

                onChange={(e) => {
                  props.setUpdateTxt(e.target.value, dream.key);
                }}
              ></textarea>
              <p id="typ">{dream.Genre}</p>
              <span onClick={() => props.deleteItem(dream.key)}>
                <FontAwesomeIcon className="faicon" icon="trash" />
              </span>
              <i
                class="fa fa-edit"
                id={dream.key + 1}
                onClick={() => {
                  props.enableEdit(dream.key);
                }}
              >
                
              </i>
              <i 
                class="fa fa-check-circle"
                id={dream.key + 2}
                onClick={() => {
                  props.agreeEdit(dream.key);
                }}
              ></i>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default List;
