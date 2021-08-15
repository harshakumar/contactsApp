import React, { useState, useEffect, Fragment, useCallback } from "react";
import SearchBar from "./SearchBar";
import SelectAll from "./SelectAll";
import AllContactsList from "./AllContactsList";
import SelectedContactList from "./SelectedContactsList";

const ContactsApp = () => {
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [contactState, setContactState] = useState([]);
  const [showSelectAllBtn, setShowSelectAllBtn] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isBulkSelection, setIsBulkSelection] = useState(false);
  const [selectionCounter, setSelectionCounter] = useState(0);
  let content = "";
  const FULLNAME = "full_name";
  const SELECTED = "selected";

  const fetchContactsHandler = useCallback(async () => {
    setIsLoaded(false);
    setError(null);
    try {
      const response = await fetch(
        "https://contactsapp-412c7-default-rtdb.firebaseio.com/contacts.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      const contactsData = data.map((con) => {
        return {
          ...con,
          [FULLNAME]: con.first_name + " " + con.last_name,
          [SELECTED]: false,
        };
      });

      setContactState(contactsData);
      setSearchResults(contactsData);
      setShowSelectAllBtn(true);
    } catch (error) {
      setError(error.message);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const results = contactState.filter((person) =>
      person.full_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
    results.length > 0 ? setShowSelectAllBtn(true) : setShowSelectAllBtn(false);
  }, [searchTerm, contactState]);

  useEffect(() => {
    fetchContactsHandler();
  }, [fetchContactsHandler]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  if (error) {
    content = error;
  }
  if (!isLoaded) {
    content = "Loading contacts...!";
  }

  return (
    <main className="main-container">
      <SearchBar value={searchTerm} onChange={handleChange} />
      {searchResults.length === 0 ? (
        content.length > 1 ? (
          <p className="user-message">{content}</p>
        ) : (
          <p className="user-message">No search found!</p>
        )
      ) : (
        <Fragment>
          <SelectAll
            showSelectAllBtn={showSelectAllBtn}
            setSearchResults={setSearchResults}
            searchResults={searchResults}
            setIsBulkSelection={setIsBulkSelection}
            isBulkSelection={isBulkSelection}
            setSelectionCounter={setSelectionCounter}
          />
          <section className="items-section">
            <AllContactsList
              searchResults={searchResults}
              setSearchResults={setSearchResults}
              isBulkSelection={isBulkSelection}
              setIsBulkSelection={setIsBulkSelection}
              setSelectionCounter={setSelectionCounter}
              selectionCounter={selectionCounter}
            />
            <SelectedContactList
              searchResults={searchResults}
              setSearchResults={setSearchResults}
              isBulkSelection={isBulkSelection}
              setIsBulkSelection={setIsBulkSelection}
              setSelectionCounter={setSelectionCounter}
              selectionCounter={selectionCounter}
              searchTerm={searchTerm}
            />
          </section>
        </Fragment>
      )}
    </main>
  );
};

export default ContactsApp;
