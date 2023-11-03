import { SelectedDocContext } from "@/context/SelectedDocContext";
import { useContext } from "react";

export default function ResultList() {
  const { savedList } = useContext(SelectedDocContext);
  const inDocs = savedList.filter((item) => item.source === "inDoc");
  const outDocs = savedList.filter((item) => item.source === "outDoc");
  const uploadDocs = savedList.filter((item) => item.source === "upload");

  return (
    <div className="flex flex-col gap-3 m-3">
      <ul>
        <label>inDocs: </label>
        {inDocs.map((inDoc) => (
          <li>{inDoc.docCode}</li>
        ))}
      </ul>

      <ul>
        <label>outDocs: </label>
        {outDocs.map((outDoc) => (
          <li>{outDoc.docCode}</li>
        ))}
      </ul>

      <ul>
        <label>localFiles: </label>
        {uploadDocs.map((upDoc) => (
          <li>{upDoc.docCode}</li>
        ))}
      </ul>
    </div>
  );
}
