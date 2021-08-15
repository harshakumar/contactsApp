import React from "react";
import SelectButton from "./SelectButton";
const SelectedContactList = (props) => {
  return (
    <ul className="selected-items-container">
      <p className="selector-message">
        {props.isBulkSelection === true
          ? "All contacts selected"
          : props.selectionCounter === 0
          ? "No contact selected"
          : props.selectionCounter + " Contact Selected"}
      </p>
      {props.searchResults
        .filter((fildata) => fildata.selected === true)
        .map((data, ind) => (
          <li className="item-box" key={data.id}>
            <div className="button-container">
              <SelectButton
                searchResults={props.searchResults}
                setSearchResults={props.setSearchResults}
                isBulkSelection={props.isBulkSelection}
                setIsBulkSelection={props.setIsBulkSelection}
                setSelectionCounter={props.setSelectionCounter}
                currentData={data}
              />
            </div>
            <h3>{data.full_name}</h3>
            <p>{data.email}</p>
            <p>{data.mobile}</p>
          </li>
        ))}
    </ul>
  );
};
export default SelectedContactList;
