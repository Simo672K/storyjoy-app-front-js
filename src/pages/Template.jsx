import Navbar from '../components/Navbar/Navbar'
import Notification from '../components/Notification/Notification'

function Template({children}) {
  return (
    <>
      <Navbar />
      <main className='container mx-auto'>
        <Notification />
        {children}
      </main>
    </>
  )
}

export default Template;