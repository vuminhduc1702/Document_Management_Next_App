import { useState } from "react";
import FileUploader from "./FileUploader";
import DocumentBox from "./DocumentBox";

export default function Tabs() {
  const [toggle, setToggle] = useState(1);
  return (
    <div className="container">
      <div className="grid grid-cols-2 justify-center items-center">
        <div
          className={toggle === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => setToggle(1)}
        >
          Từ văn bản
        </div>
        <div
          className={toggle === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => setToggle(2)}
        >
          Tải file
        </div>
      </div>
      <div className="content-tabs">
        <div className={toggle === 1 ? "content active-content" : "content"}>
          <DocumentBox />
        </div>
        <div className={toggle === 2 ? "content active-content" : "content"}>
          <FileUploader />
        </div>
      </div>
    </div>
  );
}
