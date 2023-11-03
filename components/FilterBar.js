export default function FilterBar({
  onChangeDocSource,
  onSearch,
  onSearchClick,
}) {
  function handleChangeDocSource(value) {
    onChangeDocSource(value);
  }

  function handleSearchQuery(value) {
    onSearch(value);
  }

  function handleSearchClick() {
    onSearchClick();
  }

  return (
    <div className="grid grid-cols-3 gap-5 w-full text-lg p-3 bg-gray-100">
      <div className="flex flex-col gap-2">
        <h2>Nguồn văn bản</h2>
        <select
          className="border w-full h-16 px-2 rounded-lg"
          onChange={(ev) => handleChangeDocSource(ev.target.value)}
        >
          <option key="0" value="inDoc">
            Văn bản đến
          </option>
          <option key="1" value="outDoc">
            Văn bản đi
          </option>
        </select>
      </div>
      <div className="col-span-2 flex flex-col gap-2">
        <h2>Nhập nội dung tìm kiếm</h2>
        <div className="flex gap-5">
          <input
            className="border w-2/3 h-16 px-2 rounded-lg"
            type="text"
            placeholder="Trích yếu/Số ký hiệu/Số đến/Số phát hành"
            onChange={(ev) => handleSearchQuery(ev.target.value)}
          />
          <div className="flex items-center">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-3xl"
              onClick={handleSearchClick}
            >
              Tìm kiếm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
