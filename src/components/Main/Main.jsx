import Experience from "../Experience/ExperienceCard";
import Nav from "../Nav/Nav";

function Main() {
  return (
    <main>
      <div className="grid grid-cols-12">
        <Nav />
        <div className="col-span-10 bg-vsblack-500 h-[2000px]">
          <section id="about">
            <div className="">
              <h1 className="font-source-code text-4xl p-4 text-white">
                About Me
              </h1>
              <p className="p-4">
                Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Nostrum tempore sequi
                consequatur ratione numquam quasi quod
                adipisci. Minus ipsa vitae ex molestias,
                magnam, distinctio modi laborum architecto
                tempore veniam nostrum. Lorem ipsum dolor
                sit amet consectetur adipisicing elit.
                Soluta magnam facere doloribus consequatur
                corporis ex doloremque harum veniam mollitia
                eveniet ut nisi in earum debitis, nemo
                molestias necessitatibus illum nulla?
              </p>
            </div>
          </section>
          <section id="experience">
            <div className="m-8 text-white">
              <h1 className="font-source text-4xl">
                Work Experience
              </h1>
              <Experience></Experience>
              <Experience></Experience>
              <Experience></Experience>
            </div>
          </section>
          <section id="timeline"></section>
          <section id="projects">
            <h1>Project 1</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Numquam quasi temporibus
              enim consectetur earum, velit dolorem iste
              molestiae consequuntur mollitia reprehenderit,
              rem nesciunt dicta a consequatur expedita ea
              accusamus suscipit!
            </p>
            <h1>Project 2</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Numquam quasi temporibus
              enim consectetur earum, velit dolorem iste
              molestiae consequuntur mollitia reprehenderit,
              rem nesciunt dicta a consequatur expedita ea
              accusamus suscipit!
            </p>
            <h1>Project 3</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Numquam quasi temporibus
              enim consectetur earum, velit dolorem iste
              molestiae consequuntur mollitia reprehenderit,
              rem nesciunt dicta a consequatur expedita ea
              accusamus suscipit!
            </p>
          </section>
          <section id="contact"></section>
        </div>
      </div>
    </main>
  );
}

export default Main;
