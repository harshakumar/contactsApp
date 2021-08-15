import React from "react";
import SelectButton from "./SelectButton";
const AllContactsList = (props) => {
  return (
    <ul className="all-items-container">
      {props.searchResults.map((data, ind) => (
        <li className="item-box" key={data.id}>
          <div className="button-container">
            <SelectButton
              searchResults={props.searchResults}
              setSearchResults={props.setSearchResults}
              isBulkSelection={props.isBulkSelection}
              setIsBulkSelection={props.setIsBulkSelection}
              currentData={data}
              setSelectionCounter={props.setSelectionCounter}
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
export default AllContactsList;
