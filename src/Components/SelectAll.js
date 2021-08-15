import React from "react";
const SelectAll = (props) => {
  return (
    <section className="select-all-box-container">
      {props.showSelectAllBtn === true ? (
        <button
          type="button"
          name="selectAll"
          className={
            props.isBulkSelection === false ? "btn-all-selected-active" : ""
          }
          onClick={(e) => {
            props.setSearchResults(
              props.searchResults.map((cs) => {
                if (e.target.innerText === "Select All") {
                  cs.selected = true;
                  props.setIsBulkSelection(true);
                } else {
                  props.setIsBulkSelection(false);
                  cs.selected = false;
                  props.setSelectionCounter(0);
                }
                return cs;
              })
            );
          }}
        >
          {props.isBulkSelection === false ? "Select All" : "Deselect All"}
        </button>
      ) : (
        ""
      )}
    </section>
  );
};
export default SelectAll;
