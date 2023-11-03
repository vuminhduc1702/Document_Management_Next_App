"use client";

import PopUp from "@/components/PopUp";
import ResultList from "@/components/ResultList";
import { useState } from "react";

export default function Home() {
  const [popUpIsShown, setPopUpIsShown] = useState(false);
  const [submit, setSubmit] = useState(false);

  function handleOpenPopup() {
    setPopUpIsShown(!popUpIsShown);
    setSubmit(false);
  }

  return (
    <div className="mt-3 ml-3">
      <button
        onClick={handleOpenPopup}
        className="flex border border-gray-400 bg-blue-200 text-blue-500 hover:bg-blue-500 hover:text-white px-10 py-2 mb-5 rounded-3xl"
      >
        Chọn file căn cứ
      </button>
      {popUpIsShown && <PopUp onClose={setPopUpIsShown} onSubmit={setSubmit} />}
      {submit && <ResultList />}
    </div>
  );
}
