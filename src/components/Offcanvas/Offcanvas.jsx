import { useEffect, useState } from "react"

function Offcanvas({children, show}) {
  const [isHidden, setIsHidden] = useState(!show)
  useEffect(()=>{
    if (!show){
      setTimeout(()=>{
        setIsHidden(prev=> !prev);
      }, 300);
    }
  }, [show])
  return (
    <div className={`fixed right-0 top-0 bg-[#00000099] h-[100vh] w-full z-50 ${!show ?'opacity-0 transition-opacity duration-300' : ''} ${isHidden ? 'hidden': 'block'}`}>
      <section className={`absolute right-0 top-0 lg:w-[40%] md:w-[50%] sm:w-[60%] w-[95%] flex flex-col bg-white ms-auto h-full border-l-2 border-gray-500 ${!show ? 'translate-x-full opacity-0 transition-all' : ''}`}>
        {children}
      </section>
    </div>
  )
}

export default Offcanvas