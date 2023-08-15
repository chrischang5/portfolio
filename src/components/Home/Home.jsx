import { Link } from "react-router-dom";
function Home() {
  // I want the home component to have like 5 buttons, each Linking to pages in the site.
  // They wil have some type of hover animation that will look cool.
  
  const width = "w-10";
  return (
    // <div className="h-96 flex flex-row text-center flex-nowrap space-x-5">
    //   <div className="basis-1/5">
    //     <Link to="/">Home</Link>
    //   </div>
    //   <div className="basis-1/5">
    //     <Link to="/about">About Me</Link>
    //   </div>
    //   <div className="basis-1/5">
    //     <Link to="/contact">Contact</Link>
    //   </div>
    //   <div className="basis-1/5">
    //     <Link to="/experience">Experience</Link>
    //   </div>
    //   <div className="basis-1/5">
    //     <Link to="/projects">Projects</Link>
    //   </div>
    // </div>


    <div className="mt-8 grid lg:grid-cols-5 text-center gap-10">
      <div className={width}>
        <Link to="/">Home</Link>
      </div>
      <div className={width}>
        <Link to="/about">About Me</Link>
      </div>
      <div className={width}>
        <Link to="/contact">Contact</Link>
      </div>
      <div className={width}>
        <Link to="/experience">Experience</Link>
      </div>
      <div className={width}>
        <Link to="/projects">Projects</Link>
      </div>
    </div>
  );
}

export default Home;
