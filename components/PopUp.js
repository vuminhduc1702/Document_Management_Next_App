import { useContext } from "react";
import SelectedList from "./SelectedList";
import Tabs from "./Tabs";
import { SelectedDocContext } from "@/context/SelectedDocContext";

export default function PopUp({ onClose, onSubmit }) {
  const {
    selectedDocList,
    selectedInDoc,
    selectedOutDoc,
    uploadedDoc,
    clearList,
  } = useContext(SelectedDocContext);

  function handleClose() {
    clearList();
    onClose(false);
  }

  function handleSubmit() {
    onSubmit(true);
    onClose(false);
    console.log("Selected list: ", selectedDocList);
    console.log("Selected inDoc: ", selectedInDoc),
      console.log("Selected outDoc: ", selectedOutDoc);
    console.log("Upload: ", uploadedDoc);
  }

  return (
    <div className="flex flex-col gap-3 w-11/12 mx-auto pt-5">
      <div className="w-full flex justify-end">
        <button
          onClick={handleClose}
          className="border border-blue-500 rounded-lg px-5 hover:bg-blue-500 hover:text-white"
        >
          X
        </button>
      </div>
      <div className="grid grid-cols-4 gap-2">
        <div className="col-span-3 flex flex-col px-2 gap-2 border-r border-gray-200">
          <Tabs />
          <div className="ml-auto">
            <button
              onClick={handleClose}
              className="btn hover:bg-blue-500 hover:text-white"
            >
              Hủy bỏ
            </button>
            <button
              onClick={handleSubmit}
              className="btn hover:bg-blue-500 hover:text-white"
            >
              Xác nhận
            </button>
          </div>
        </div>
        <div>
          <SelectedList />
        </div>
      </div>
    </div>
  );
}
