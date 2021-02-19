import { useState, useRef } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const textInput = useRef(null);

  const toggleSearch = () => {
    setOpen(!open);

    if (!open) {
      textInput.current.focus();
    }
  };

  return (
    <div>
      <div className={`search-${open ? "open" : "close"}`}>
        <div className="ui category search">
          <i
            className="gray search icon"
            style={{ color: "lightgray" }}
            onClick={() => toggleSearch()}
          />
          <div className="ui icon input" style={{ border: "0px" }}>
            <input
              className="prompt"
              ref={textInput}
              type="text"
              placeholder="Search "
              style={{ border: "0px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
