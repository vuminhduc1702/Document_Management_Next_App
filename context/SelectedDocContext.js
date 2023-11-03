"use client";

import { createContext, useState } from "react";

export const SelectedDocContext = createContext({});

export function SelectedDocContextProvider({ children }) {
  const [selectedDocList, setSelectedDocList] = useState([]);
  const [savedList, setSavedList] = useState([]);

  function saveList() {
    setSavedList(selectedDocList);
  }

  console.log(savedList);

  function addDocToList(code, docSource) {
    const item = { docCode: code, source: docSource };
    setSelectedDocList([...selectedDocList, item]);
  }

  function deleteDocFromList(code) {
    setSelectedDocList(selectedDocList.filter((item) => item.docCode !== code));
  }

  function clearList() {
    setSelectedDocList(savedList);
  }

  return (
    <SelectedDocContext.Provider
      value={{
        selectedDocList,
        savedList,
        setSelectedDocList,
        addDocToList,
        deleteDocFromList,
        saveList,
        clearList,
      }}
    >
      {children}
    </SelectedDocContext.Provider>
  );
}
