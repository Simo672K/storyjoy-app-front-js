import Avatar from '../Avatar/Avatar'
import {RxDotFilled} from "react-icons/rx"
import CoverImg from "../../assets/book-notification-cover.png";

function NotificationItem() {
  return (
    <li className='border-b'>
      <a className='py-2 px-6 flex hover:bg-gray-100 items-center' href="">
        <div>
          <Avatar name="Hakmi Mohammed"/>
        </div>
        <div className='ms-2'>
          <p className='text-[0.9rem] leading-4 text-blue-950 mb-1'><strong>Jhon Doe</strong> rated <strong>4.7</strong> your story <span className='text-blue-800 underline'>"Lorem, ipsum dolor sit amet consectetur adipisicing."</span></p>
          <span className='text-[0.8rem] text-gray-500'>12:44 pm <RxDotFilled className='inline'/> Today</span>
        </div>
        <div className='w-14'>
          <img className='' src={CoverImg} alt={`book cover`} />
        </div>
      </a>
    </li>
  )
}

export default NotificationItem