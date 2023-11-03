import { SelectedDocContext } from "@/context/SelectedDocContext";
import { useContext, useState } from "react";

export default function FileUploader() {
  const { addDocToList } = useContext(SelectedDocContext);
  const [file, setFile] = useState(null);

  function handleFile(ev) {
    if (ev.target.files[0] === undefined) return;
    setFile(ev.target.files[0]);
  }
  function handleUpload(ev) {
    ev.preventDefault();
    if (file === null) return;
    addDocToList(file.name, "upload");
    setFile(null);
  }

  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <div className="flex w-full h-96 justify-center items-center">
        <label className="w-full h-full max-w-3xl cursor-pointer border border-dashed border-gray-500 bg-gray-200 rounded-xl flex flex-col justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
            />
          </svg>
          <span>Upload File</span>
          <input
            onChange={(ev) => handleFile(ev)}
            type="file"
            className="hidden"
          />
        </label>
      </div>
      {file !== null && (
        <div className="border border-blue-500 rounded-lg w-full max-w-3xl px-3 py-1">
          {file.name}
        </div>
      )}
      <button
        onClick={(ev) => handleUpload(ev)}
        className="bg-blue-500 text-white p-3 rounded-xl"
      >
        Upload
      </button>
    </div>
  );
}
