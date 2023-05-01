import { useState } from "react";
import Offcanvas from "../Offcanvas/Offcanvas";
import OffcanvasBody from "../Offcanvas/OffcanvasBody";
import OffcanvasHeader from "../Offcanvas/OffcanvasHeader";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import NotificationsList from "./NotificationsList";
import NotificationItem from "./NotificationItem";
import NoNotifIllustration from "../../assets/No-Notification-illustration.png";

function Notification() {
  const [showNotifPanel, setShowNotifPanel] = useState(true);
  const [markedRead, setMarkedRead] = useState(false);

  const handelNotificationClose = () => {
    setShowNotifPanel(false);
  };

  return (
    <Offcanvas show={showNotifPanel}>
      <OffcanvasHeader onClose={handelNotificationClose}>
        <div className="flex items-baseline justify-between w-full">
          <h3 className="text-xl font-bold">Notifications</h3>
          <button
            onClick={() => setMarkedRead(true)}
            className="flex items-center text-sm text-sky-600"
          >
            <IoCheckmarkCircleOutline className="me-1" />
            Mark all as read
          </button>
        </div>
      </OffcanvasHeader>
      <OffcanvasBody>
        {!markedRead ? (
          <NotificationsList>
            <NotificationItem></NotificationItem>
            <NotificationItem></NotificationItem>
            <NotificationItem></NotificationItem>
            <NotificationItem></NotificationItem>
            <NotificationItem></NotificationItem>
            <NotificationItem></NotificationItem>
            <NotificationItem></NotificationItem>
          </NotificationsList>
        ) : (
          <section className="w-full h-full flex flex-col items-center justify-center">
            <img src={NoNotifIllustration} alt="No-Notification-illustration" />
            <p className="mt-4">You have no new notifications.</p>
          </section>
        )}
      </OffcanvasBody>
    </Offcanvas>
  );
}

export default Notification;
