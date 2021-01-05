import './App.css';
import SearchIcon from "../src/Images/search.png"
import DREAMS from "./dreams-data.json"

function App() {
  return (
    <div className="App">
        <div className="search">
          <input type="text" className="searchTerm" placeholder="What are you looking for?"></input>
          <button type="submit" className="searchButton"><img src={SearchIcon}></img> </button>
        </div>

        <section>
          {DREAMS.map((dream, index) => {
            return <div>
              <h4>{dream.title}</h4>
            </div>
          })}
        </section>
    </div>
  );
}

export default App;
