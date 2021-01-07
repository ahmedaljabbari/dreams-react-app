import React from "react";
import "../assets/list.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function List(props){
  const items = props.listItems;
  const searchValue = props.searchValue;
  const deleteDream = props.deleteDream; 
  return (
    <div>
      <section>
          {items.map((dream, index) => {
            if (
              searchValue !== "" &&
              dream.title
                .toLowerCase()
                .indexOf(searchValue.toLowerCase()) === -1
            ) {
              return null;
            }
            return (
              <div id="dream-box" key={dream.index}>
                <h3>{dream.title}</h3>
                <p>{dream.content}</p>
                <p id="typ">{dream.Genre}</p>
                <span onClick={deleteDream}>
                  <FontAwesomeIcon className="faicon" icon="trash" />
                </span>
              </div>
            );
          })}
        </section>
    </div>
  )
}

export default List