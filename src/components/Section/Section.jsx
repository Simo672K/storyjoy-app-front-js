
function Section({children, className}) {
  return <section className={"my-20 "+className??''}>{children}</section>;
}

export default Section;
