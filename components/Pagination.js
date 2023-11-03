export default function Pagination({ page, onPageChange, docCount }) {
  function prevPageChange() {
    onPageChange(page - 1);
  }
  function nextPageChange() {
    onPageChange(page + 1);
  }
  return (
    <div className="m-auto flex">
      <button
        disabled={page <= 1}
        onClick={prevPageChange}
        className="btn bg-blue-500 text-white disabled:bg-gray-400"
      >
        Prev
      </button>
      <button
        disabled={page === Math.ceil(docCount / 5)}
        onClick={nextPageChange}
        className="btn  bg-blue-500 text-white disabled:bg-gray-400"
      >
        Next
      </button>
    </div>
  );
}
