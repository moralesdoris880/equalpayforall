import { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");

  function handleQuery(query){
// HERE IS WHERE FETCH occurs
  }

    return (
      <div>
        <form onSubmit={handleQuery}>
            <input placeholder="Search... " onChange={(e) => setQuery(e.target.value)}></input>
            <input type="submit" value="Search"></input>
        </form>
      </div>
    );
  }
  
  export default Search;