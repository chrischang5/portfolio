function Section(props) {
  return (
    <section
      id={props.id}
      className="w-full scroll-mb-40 pt-16"
    >
      {props.children}
    </section>
  );
}

export default Section;
