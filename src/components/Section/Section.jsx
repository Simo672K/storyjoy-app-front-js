
function Section({children, className}) {
  return <section className={"my-12 "+className??''}>{children}</section>;
}

export default Section;
