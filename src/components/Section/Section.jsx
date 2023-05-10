
function Section({children, className}) {
  return <section className={"mb-10 "+className??''}>{children}</section>;
}

export default Section;
