import {FaFacebookSquare,FaTwitterSquare,FaYoutube} from "react-icons/fa"

function BookAuthorPopoverBody({content}) {
  return (
    <>
      <p className="leading-4 text-[0.8rem] my-2 text-gray-800">
        {content}
      </p>
      <ul className="ps-2">
        <li className="flex items-center text-gray-500 text-[0.8rem]"><FaFacebookSquare size={16} className="text-blue-600"/> <span className="ms-2">Facebook</span></li>
        <li className="flex items-center text-gray-500 text-[0.8rem]"><FaTwitterSquare size={16} className="text-sky-400"/> <span className="ms-2">Twitter</span></li>
        <li className="flex items-center text-gray-500 text-[0.8rem]"><FaYoutube size={16} className="text-red-600"/> <span className="ms-2">Youtube</span></li>
      </ul>
    </>
  );
}

export default BookAuthorPopoverBody;
