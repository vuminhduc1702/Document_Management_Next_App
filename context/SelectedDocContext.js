"use client";

import { createContext, useState } from "react";

export const SelectedDocContext = createContext({});

export function SelectedDocContextProvider({ children }) {
  const [selectedDocList, setSelectedDocList] = useState([]);
  const [selectedInDoc, setSelectedInDoc] = useState([]);
  const [selectedOutDoc, setSelectedOutDoc] = useState([]);
  const [uploadedDoc, setUploadedDoc] = useState([]);

  function addDocToList(code, docSource) {
    setSelectedDocList([...selectedDocList, code]);
    if (docSource === "inDoc") {
      setSelectedInDoc([...selectedInDoc, code]);
    } else if (docSource === "outDoc") {
      setSelectedOutDoc([...selectedOutDoc, code]);
    } else if (docSource === "upload") {
      setUploadedDoc([...uploadedDoc, code]);
    }
  }

  function deleteDocFromList(code) {
    setSelectedDocList(selectedDocList.filter((docCode) => docCode !== code));
    setSelectedInDoc(selectedInDoc.filter((docCode) => docCode !== code));
    setSelectedOutDoc(selectedOutDoc.filter((docCode) => docCode !== code));
  }

  function clearList() {
    setSelectedDocList([]);
    setSelectedInDoc([]);
    setSelectedOutDoc([]);
    setUploadedDoc([]);
    console.log("Selected list: ", selectedDocList);
    console.log("Selected inDoc: ", selectedInDoc),
      console.log("Selected outDoc: ", selectedOutDoc);
    console.log("Upload: ", uploadedDoc);
  }

  return (
    <SelectedDocContext.Provider
      value={{
        selectedDocList,
        selectedInDoc,
        selectedOutDoc,
        uploadedDoc,
        setSelectedDocList,
        addDocToList,
        deleteDocFromList,
        setUploadedDoc,
        clearList,
      }}
    >
      {children}
    </SelectedDocContext.Provider>
  );
}
