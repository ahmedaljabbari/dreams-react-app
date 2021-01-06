/** @format */

import React from "react";
import SearchIcon from "../src/Images/search.png";
import DREAMS from "./dreams-data.json";
import List from "./components/list";
import Radio from "./components/RadioButtons";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

library.add(faTrash)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: DREAMS,
      searchValue: "",
      rubrik: "",
      text: "",

      newGenre: ""
    };
  }

  handleInput = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  };

  handleTitle = (event) => {
    this.setState({
      rubrik: event.target.value,
    });
  };

  handleContent = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  changeRadio = (event) => {
    this.setState({
      newGenre: event.target.value,
    });
  };

  
  addItem = (e) => {
    e.preventDefault();
    const newItem = {
      title: this.state.rubrik,
      content: this.state.text,
      Genre: this.state.newGenre
    };
    console.log(newItem);
    if (newItem.rubrik !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems, // خلينه اللسته الجديده بعد اضافة العنصر بمكان اللسته الاصليه
        rubrik: "",
        text: "",         //فرغنا الحقول بعد اظافة العنصر الجديد
        newGenre:""
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div id="header">
          <div className="search">
            <input
              type="text"
              className="searchTerm"
              placeholder="Search for dreams ..."
              onChange={this.handleInput}
            ></input>
            <button type="submit" className="searchButton">
              <img src={SearchIcon} alt=""></img>{" "}
            </button>
          </div>
        </div>

        <section>
          <div className="slide-section">
            <form id="add-form" onSubmit={this.addItem}>
              <input
                type="text"
                placeholder="Type title ..."
                onChange={this.handleTitle}
                value={this.state.rubrik}
              ></input>{" "}
              <textarea
                onChange={this.handleContent}
                value={this.state.text}
                placeholder="Describe your dream ..."
              ></textarea>{" "}
                      
              <Radio newGenre={this.state.newGenre} changeRadio={this.changeRadio} />

              <button type="submit">Add</button>
            </form>
          </div>
          <div id="slider">
            + Add your dream
          </div>

        </section>

        <List listItems={this.state.items} searchValue={this.state.searchValue} />
      </div>
    );
  }
}

export default App;
