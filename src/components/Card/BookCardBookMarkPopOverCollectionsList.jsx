import { RiLockFill } from "react-icons/ri"

function BookCardBookMarkPopOverCollectionsList() {
  return (
    <ul className="p-3 mb-2">
      <li className="flex items-center text-gray-600 py-1">
        <div className="flex items-cente me-auto">
          <input
            type="checkbox"
            className="me-2 border-gray-200"
            name=""
            id="collection-1"
          />
          <label htmlFor="collection-1">Reading list</label>
        </div>
        <RiLockFill size={18} />
      </li>
      <li className="flex items-center text-gray-600 py-1">
        <div className="flex items-cente me-auto">
          <input
            type="checkbox"
            className="me-2 border-gray-200"
            name=""
            id="collection-2"
          />
          <label htmlFor="collection-2">Dummy</label>
        </div>
        <RiLockFill size={18} />
      </li>
      <li className="flex items-center text-gray-600 py-1">
        <div className="flex items-cente me-auto">
          <input
            type="checkbox"
            className="me-2 border-gray-200"
            name=""
            id="collection-3"
          />
          <label htmlFor="collection-3">Archive</label>
        </div>
        <RiLockFill size={18} />
      </li>
    </ul>
  );
}

export default BookCardBookMarkPopOverCollectionsList;
