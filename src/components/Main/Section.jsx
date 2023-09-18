function Section(props) {
  return (
    <section
      id={props.id}
      className="max-h-fit min-h-screen w-full scroll-mb-40 pt-16"
    >
      {props.children}
    </section>
  );
}

export default Section;
