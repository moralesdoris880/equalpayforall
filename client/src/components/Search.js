import { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");

  function handleQuery(query){
// HERE IS WHERE FETCH occurs
  }

    return (
      <div>
        <form onSubmit={handleQuery}>
            <input class="searchBar" placeholder="Search... " onChange={(e) => setQuery(e.target.value)}></input>
            <input class="searchButton" type="submit" value="Search"></input>
        </form>
      </div>
    );
  }
  
  export default Search;