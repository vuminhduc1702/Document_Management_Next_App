import { SelectedDocContext } from "@/context/SelectedDocContext";

import { useContext, useEffect, useState } from "react";
import Pagination from "./Pagination";

export default function DocumentList({ docList, docSource }) {
  const [page, setPage] = useState(1);
  const docPerPage = 5;
  const docCount = docList.length;

  const { selectedDocList, addDocToList, deleteDocFromList } =
    useContext(SelectedDocContext);

  useEffect(() => {
    setPage(1);
  }, [docList]);

  function handleCheckBox(code, source) {
    if (selectedDocList.includes(code)) {
      deleteDocFromList(code);
    } else {
      addDocToList(code, source);
    }
  }

  function formatDate(timestamp) {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  const lastIndex = page * docPerPage;
  const firstIndex = lastIndex - docPerPage;
  const docs = docList.slice(firstIndex, lastIndex);

  return (
    <div className="flex flex-col gap-2">
      <table className="basic mt-2">
        <thead>
          <tr>
            <td className="px-4"></td>
            <td>Ký hiệu</td>
            <td>Trích yếu</td>
            <td>Người soạn thảo</td>
            <td>Ngày văn bản</td>
          </tr>
        </thead>
        <tbody>
          {docs.length > 0 &&
            docs.map((doc) => (
              <tr key={doc.documentCode}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedDocList.includes(doc.documentCode)}
                    className="h-4 w-4 px-4"
                    onChange={() => handleCheckBox(doc.documentCode, docSource)}
                  />
                </td>
                <td>{doc.documentCode}</td>
                <td>{doc.shortDescription}</td>
                <td>{doc.creator}</td>
                <td>{formatDate(doc.createdAt)}</td>
              </tr>
            ))}
        </tbody>
      </table>
      {Math.ceil(docCount / 5) > 1 && (
        <Pagination page={page} onPageChange={setPage} docCount={docCount} />
      )}
    </div>
  );
}
