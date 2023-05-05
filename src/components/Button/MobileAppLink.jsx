import ButtonLink from "./ButtonLink";

function MobileAppLink({logoImg, brand, text, className}) {
  return (
    <ButtonLink className={"bg-gray-950 rounded-lg shadow-[0_-1px_2px_0_var(--tw-shadow-color)] shadow-white text-white px-3 py-2 " + className??''}>
      <div className="flex">
        <div className="me-2">
          <img src={logoImg} alt="apple logo" className="h-full" />
        </div>
        <div className="flex flex-col">
          <span className="leading-4 text-[0.7rem] font-thin">{text}</span>
          <span className="leading-4 font-medium">{brand}</span>
        </div>
      </div>
    </ButtonLink>
  );
}

export default MobileAppLink;
