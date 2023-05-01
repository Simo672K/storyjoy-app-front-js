import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar'
import Notification from '../components/Notification/Notification'
import {NotifCtxProvider} from '../components/Notification/NotificationState'


function Template({children}) {
  const [showNotifPanel, setShowNotifPanel] = useState(true);
  return (
    <>
      <NotifCtxProvider value={{show: showNotifPanel, setShow: setShowNotifPanel}}>
        <Navbar />
        <main className='container mx-auto'>
            <Notification />
          {children}
        </main>
      </NotifCtxProvider>
    </>
  )
}

export default Template;