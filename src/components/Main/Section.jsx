function Section(props) {
  return (
    <section id={props.id} className="scroll-mb-40 w-full min-h-screen max-h-fit pt-16">
      {props.children}
    </section>
  );
}

export default Section;
