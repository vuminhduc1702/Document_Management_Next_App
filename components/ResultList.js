import { SelectedDocContext } from "@/context/SelectedDocContext";
import { useContext } from "react";

export default function ResultList() {
  const { selectedInDoc, selectedOutDoc, uploadedDoc } =
    useContext(SelectedDocContext);

  return (
    <div className="flex flex-col gap-3 m-3">
      <ul>
        <label>inDocs: </label>
        {selectedInDoc.map((inDoc) => (
          <li>{inDoc}</li>
        ))}
      </ul>

      <ul>
        <label>outDocs: </label>
        {selectedOutDoc.map((outDoc) => (
          <li>{outDoc}</li>
        ))}
      </ul>

      <ul>
        <label>localFiles: </label>

        {uploadedDoc.map((upDoc) => (
          <li>{upDoc}</li>
        ))}
      </ul>
    </div>
  );
}
