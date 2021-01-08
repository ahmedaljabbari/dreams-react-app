/** @format */

import React from "react";
import SearchIcon from "../src/Images/search.png";
import DREAMS from "./dreams-data.json";
import List from "./components/list";
import Radio from "./components/RadioButtons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
import "./App.css";
import "./assets/slider.css";

library.add(faTrash);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: DREAMS,
      searchValue: "",
      rubrik: "",
      text: "",
      key:"",

      newGenre: "",
    };
    this.setUpdate = this.setUpdate.bind(this);
    this.setUpdateTxt = this.setUpdateTxt.bind(this);
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
      Genre: this.state.newGenre,
      key: Date.now()
    };
    console.log(newItem);
    if (newItem.rubrik !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems, // خلينه اللسته الجديده بعد اضافة العنصر بمكان اللسته الاصليه
        rubrik: "",
        text: "", //فرغنا الحقول بعد اظافة العنصر الجديد
        newGenre: "",
        key:""
      });
      $("#slide-section").slideToggle(800);
    }
  };

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter(dream => dream.key !== key);
    this.setState({
      items: filteredItems,
    });
  };


  enableEdit = (key) => {
    const editedList = this.state.items;
    editedList.map((dream) => {
      if(dream.key === key){
        var el = document.getElementsByClassName(dream.key);
        var editBtn = document.getElementById(dream.key + 1);
        var okBtn = document.getElementById(dream.key + 2);
        $(el).removeAttr('disabled').css({"background-color": "lightgray", "padding": "10px"})
        $(editBtn).hide()
        $(okBtn).fadeIn(700)
      }
    })
  }  

  agreeEdit = (key) => {
    const editedList = this.state.items;
    editedList.map((dream) => {
      if(dream.key === key){
        var el = document.getElementsByClassName(dream.key);
        var editBtn = document.getElementById(dream.key + 1);
        var okBtn = document.getElementById(dream.key + 2);
        $(el).attr('disabled', true).css({"background-color": "transparent"})
        $(okBtn).hide()
        $(editBtn).fadeIn();
      }
    })
  }

  setUpdate(title, key){
    const editedList = this.state.items;
    editedList.map((dream) => {
      if(dream.key === key){
        dream.title = title        
      }
    })
    this.setState({
      items:editedList
    })
  };
  setUpdateTxt(content, key){
    const editedList = this.state.items;
    editedList.map((dream) => {
      if(dream.key === key){
        dream.content = content
      }
    })
    this.setState({
      items:editedList
    })
  }

  performSliding = () =>{
    const el = document.getElementById("slide-section");
    $(el).slideToggle(800);
  }

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
          <div id="slide-section">
            <form id="add-form" onSubmit={this.addItem}>
              <input
                required
                type="text"
                placeholder="Type title ..."
                onChange={this.handleTitle}
                value={this.state.rubrik}
              ></input>{" "}
              <textarea
                required
                onChange={this.handleContent}
                value={this.state.text}
                placeholder="Describe your dream ..."
              ></textarea>{" "}
              <Radio
                newGenre={this.state.newGenre}
                changeRadio={this.changeRadio}
              />
              <button type="submit">Add</button>
            </form>
          </div>
          
          <div id="slider">
            <button id="Slider-btn" onClick={this.performSliding}>
              <i class="fa fa-plus-square"></i>
              Add your dream
              <i class="fa fa-unsorted"></i>
            </button>
          </div>
        </section>

        <List
          listItems={this.state.items}
          searchValue={this.state.searchValue}
          deleteItem={this.deleteItem}
          setUpdate={this.setUpdate}
          enableEdit={this.enableEdit}
          agreeEdit={this.agreeEdit}
          setUpdateTxt={this.setUpdateTxt}
        />
        </div>
      
    );
  }
}

export default App;
