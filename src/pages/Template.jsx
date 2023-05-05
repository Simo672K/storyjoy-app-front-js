import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar'
import Notification from '../components/Notification/Notification'
import {NotifCtxProvider} from '../components/Notification/NotificationState'
import Footer from '../components/Footer/Footer';


function Template({children}) {
  const [showNotifPanel, setShowNotifPanel] = useState(false);
  return (
    <>
      <NotifCtxProvider value={{show: showNotifPanel, setShow: setShowNotifPanel}}>
        <Navbar />
        <main className='container mx-auto'>
            <Notification />
          {children}
        </main>
        <Footer />
      </NotifCtxProvider>
    </>
  )
}

export default Template;