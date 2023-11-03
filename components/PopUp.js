import { useContext } from "react";
import SelectedList from "./SelectedList";
import Tabs from "./Tabs";
import { SelectedDocContext } from "@/context/SelectedDocContext";

export default function PopUp({ onClose, onSubmit }) {
  const { saveList, clearList } = useContext(SelectedDocContext);

  function handleClose() {
    clearList();
    onClose(false);
  }

  function handleSubmit() {
    saveList();
    onSubmit(true);
    onClose(false);
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
      <div className="lg:grid lg:grid-cols-4 lg:gap-2">
        <div className="lg:col-span-3 flex flex-col px-2 gap-2 lg:border-r border-gray-200">
          <div className="flex justify-center items-center">
            <Tabs />
          </div>
          <div className="ml-auto">
            <button
              onClick={handleClose}
              className="btn border-blue-500 hover:bg-blue-500 hover:text-white"
            >
              Hủy bỏ
            </button>
            <button
              onClick={handleSubmit}
              className="btn border-blue-500 hover:bg-blue-500 hover:text-white"
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
