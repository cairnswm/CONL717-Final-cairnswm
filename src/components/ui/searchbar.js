import { useContext } from "react";
import { MovieContext } from "../context/movieContext";

const SearchBar = ({ className, onSearch }) => {
  const {searchValue: value, setSearchValue: setValue} = useContext(MovieContext);

  const doSearch = (ev) => {
    if (onSearch) {
      onSearch();
    }
  };

  return (
    <div style={{ margin: "20px", zIndex:"100" }}>
      <div className={`search_wrapper ${className}`}>
        <input
          className="input search_field"
          type="text"
          value={value}
          placeholder="Search For"
          onChange={(ev) => {
            setValue(ev.target.value);
          }}
          onKeyDown={(ev) => {
            if (ev.key === "Enter") {
              doSearch(ev);
            }
          }}
        />
        <button className="search_button btn btn-primary" onClick={doSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
