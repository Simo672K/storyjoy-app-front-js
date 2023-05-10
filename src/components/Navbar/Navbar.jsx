import { useContext } from "react";
import LogoImg from "../../assets/logo.png";
import AvatarImg from "../../assets/avatar-placeholder.jpg";
import NavbarCollapse from "./NavbarCollapse";
import NavbarNav from "./NavbarNav";
import NavbarItem from "./NavbarItem";
import Dropdown from "../Dropdown/Dropdown";
import DropdownTrigger from "../Dropdown/DropdownTrigger";
import DropdownMenu from "../Dropdown/DropdownMenu";
import DropdownItem from "../Dropdown/DropdownItem";
import DropdownDevider from "../Dropdown/DropdownDevider";
import Avatar from "../Avatar/Avatar";
import UserAvatar from "../Avatar/UserAvatar";
import SearchBox from "../Search/SearchBox";
import {
  MdOutlineModeEditOutline,
  MdNotifications,
  MdPerson,
  MdBookmarkBorder,
  MdLogout,
} from "react-icons/md";
import { IoSettingsOutline, IoMailOutline } from "react-icons/io5";
import { NotifContext } from "../Notification/NotificationState";
import PillButton from "../Button/PillButton";

function Navbar() {
  const { setShow } = useContext(NotifContext);

  let isLoggedIn = true;

  return (
    <nav className="border-b flex container md:items-center mx-auto py-2">
      <a href="/">
        <img src={LogoImg} alt="App Logo" />
      </a>
      <SearchBox />
      <NavbarCollapse>
        <NavbarNav>
          <NavbarItem linkTo={"#"}>Stories</NavbarItem>
          <NavbarItem linkTo={"#"}>Authors</NavbarItem>
          <NavbarItem linkTo={"#"}>Contact Us</NavbarItem>
          {isLoggedIn ? (
            <>
              <NavbarItem linkTo={"#"}>
                <MdOutlineModeEditOutline size={24} />
              </NavbarItem>
              <li>
                <button
                  onClick={() => setShow(true)}
                  className="inline-block font-medium px-4 text-lg py-1 cursor-pointer hover:text-sky-600"
                >
                  <MdNotifications size={28} />
                </button>
              </li>
              <li>
                <Dropdown>
                  <DropdownTrigger>
                    <Avatar img={AvatarImg} />
                  </DropdownTrigger>
                  <DropdownMenu right={true}>
                    <li className="mb-2 flex flex-col items-center py-3">
                      <UserAvatar img={AvatarImg} />
                      <h4 className="text-xl font-bold mb-0 leading-4 mt-2 text-center after:w-2 after:h-2 after:bg-green-500 after:rounded-full after:ms-1 after:inline-block">
                        Sara Doe
                      </h4>
                      <span className="text-gray-400 text-sm block max-w-[10rem] overflow-hidden whitespace-nowrap text-ellipsis">
                        example@email.com
                      </span>
                    </li>
                    <DropdownDevider />
                    <DropdownItem>
                      <MdPerson className="me-3" /> Profile
                    </DropdownItem>
                    <DropdownItem>
                      <IoMailOutline className="me-3" /> Inbox
                    </DropdownItem>
                    <DropdownItem>
                      <MdBookmarkBorder className="me-3" /> Bookmarks
                    </DropdownItem>
                    <DropdownItem>
                      <IoSettingsOutline className="me-3" /> Settings
                    </DropdownItem>
                    <DropdownDevider />
                    <DropdownItem>
                      <MdLogout className="me-3" /> Logout
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </li>
            </>
          ) : (
            <li>
              <PillButton className='text-white bg-blue-950'>Sign In</PillButton>
            </li>
          )}
        </NavbarNav>
      </NavbarCollapse>
    </nav>
  );
}

export default Navbar;
