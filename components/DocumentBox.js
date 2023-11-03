import { useState, useEffect } from "react";
import { db } from "@/app/firebase";
import DocumentList from "./DocumentList";
import FilterBar from "./FilterBar";
import {
  collection,
  getDocs,
  or,
  orderBy,
  query,
  where,
} from "firebase/firestore";

export default function DocumentBox() {
  const [docList, setDocList] = useState([]);
  const [docSource, setDocSource] = useState("inDoc");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getDocument();
  }, [docSource]);

  async function getDocument() {
    let docs = [];

    const q = query(collection(db, docSource), orderBy("index"));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      docs.push(doc.data());
    });
    setDocList(docs);
  }

  async function handleSearch() {
    let docs = [];

    if (searchQuery.trim() === "") {
      getDocument();
      return;
    }
    const q = query(
      collection(db, docSource),
      or(
        where("documentCode", "==", searchQuery),
        where("shortDescription", "==", searchQuery),
        where("creator", "==", searchQuery)
      ),
      orderBy("index")
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      docs.push(doc.data());
    });
    setDocList(docs);
  }

  return (
    <div className="flex flex-col gap-3">
      <FilterBar
        onChangeDocSource={setDocSource}
        onSearch={setSearchQuery}
        onSearchClick={handleSearch}
      />
      <DocumentList docList={docList} docSource={docSource} />
    </div>
  );
}
