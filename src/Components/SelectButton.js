import React from "react";
const SelectButton = (props) => {
  return (
    <button
      type="button"
      name="select"
      className={props.currentData.selected === false ? "btn-active" : ""}
      onClick={(event) => {
        let btnText = event.target.innerText;
        let selectedCount = 0;
        let unsSelectedCount = 0;
        props.setSearchResults(
          props.searchResults.map((cs) => {
            if (cs.id === props.currentData.id && btnText === "Select") {
              cs.selected = true;
            }
            if (cs.id === props.currentData.id && btnText === "Deselect") {
              cs.selected = false;
            }
            if (cs.selected === true) {
              selectedCount = selectedCount + 1;
            } else {
              unsSelectedCount = unsSelectedCount + 1;
            }

            return cs;
          })
        );
        props.setSelectionCounter(selectedCount);
        if (unsSelectedCount === 0) {
          props.setIsBulkSelection(true);
        } else {
          props.setIsBulkSelection(false);
        }
      }}
    >
      {props.currentData.selected === false ? "Select" : "Deselect"}
    </button>
  );
};
export default SelectButton;
