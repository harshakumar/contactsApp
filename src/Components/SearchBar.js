import React from "react";
const SearchBar = (props) => {
  const handleChange = (event) => {
    props.onChange(event);
  };
  return (
    <section className="seach-box-container">
      <input
        type="text"
        placeholder="Type to search contacts..."
        value={props.searchTerm}
        onChange={handleChange}
      />
    </section>
  );
};

export default SearchBar;
