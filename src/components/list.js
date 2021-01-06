import React from "react";
import "../assets/list.css"

function List(props){
  const items = props.listItems;
  const searchValue = props.searchValue;
  return (
    <div>
      <h1>external component</h1>
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
              <div key={index}>
                <h4>{dream.title}</h4>
                <p>{dream.content}</p>
              </div>
            );
          })}
        </section>
    </div>
  )
}

export default List