import React from "react";
import "../assets/list.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function List(props){
  const items = props.listItems;
  const searchValue = props.searchValue;
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
              <div id="dream-box" key={index}>
                <h4>{dream.title}</h4>
                <p>{dream.content}</p>
                <p>{dream.Genre}</p>
                <span>
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