import React from "react";
import ContentEditable from "react-contenteditable";
import "./App.css";
import { ContentTable } from "./components/ContentTable";
import { useActions } from "./hooks/useActions";
import { useTypeSelector } from "./hooks/useTypeSelector";
import { parseStringToIDS, validateSearch } from "./utils/parserFuncs";

function App() {
  const { searchInput } = useTypeSelector((state) => state.parser);
  const { fetchStrings, setSearchInput } = useActions();
  return (
    <>
      <div className="search-container">
        <p>Идентификаторы строк:</p>

        <ContentEditable
          className="search-input"
          html={validateSearch(searchInput)}
          onChange={(e) => {
            //save only text value to prevent error with <span> tags
            setSearchInput(e.currentTarget.innerText);
          }}
        />

        <button
          onClick={() => {
            fetchStrings(parseStringToIDS(searchInput));
          }}
        >
          Подсчитать
        </button>
      </div>
      <ContentTable />
    </>
  );
}

export default App;
