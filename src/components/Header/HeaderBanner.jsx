import Logo from '../../assets/logo-white.png'
import OpenBook from "../../assets/open-book.png"
import MobileAppLink from '../Button/MobileAppLink'
import AppleLogo from "../../assets/apple.png"
import GoogleLogo from "../../assets/google-play.png"
import AppPreview from '../../assets/app-image.png'

function HeaderBanner() {
  return (
    <section className="bg-blue-600 rounded-2xl">
      <div className="px-6 pt-4 h-full pb-0 text-white relative flex flex-col">
        <div className="mt-14 mb-6">
          <img
            className="absolute right-0 top-0"
            src={OpenBook}
            alt="open book"
          />
          <img className="mb-4" src={Logo} alt="Logo white" />
          <h2 className="text-4xl font-bold">
            The art of
            <br /> Storytelling isn't
            <br /> dead, just evolving
          </h2>
        </div>
        <p className="text-sm mb-2 ps-1">Get the app</p>
        <div className="flex">
          <MobileAppLink
            logoImg={AppleLogo}
            text="Download on the"
            brand="Apple Store"
          />
          <MobileAppLink
            className="ms-3"
            logoImg={GoogleLogo}
            text="Get it on"
            brand="Google Play"
          />
        </div>
        <div className="mt-auto w-fit mx-auto">
          <img src={AppPreview} alt="" />
        </div>
      </div>
    </section>
  );
}

export default HeaderBanner;
