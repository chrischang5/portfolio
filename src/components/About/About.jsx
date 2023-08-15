import React from "react";
import hi from "./hi.jpg";

import Container from "../Utility/Container";

function About() {
  return (
    <section id="about">
      <Container>
        <h1 className="mb-2 mt-0 text-5xl font-source-code leading-tight text-primary">
          About Me
        </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <p className="mb-3 text-black">
            Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Aliquid quisquam velit porro,
            aspernatur facilis maxime sunt, maiores
            provident, reprehenderit nulla repudiandae
            similique voluptate accusantium laborum neque
            cupiditate repellendus veniam totam.
          </p>
          <p className="mb-3 text-black">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Vero ab facilis, ratione id
            quis placeat cum et debitis nulla veritatis,
            minus corrupti iste excepturi, est odit.
            Corrupti distinctio repellat dolores. Lorem
            ipsum, dolor sit amet consectetur adipisicing
            elit. Ipsum id totam fuga ipsam, deleniti esse
            ex enim, suscipit dolores ut ea eaque! Ratione
            nam veritatis molestias architecto minus
            accusamus dolorem. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Nam voluptate,
            nemo laudantium sit iure beatae minima ipsam ab
            ipsum quo voluptatum rem fugit molestiae Lorem
            ipsum dolor sit amet, consectetur adipisicing
            elit. Reprehenderit ab vel rerum recusandae,
            expedita ullam, dolores reiciendis ipsam illo
            sint ea, et doloremque nihil voluptatem
            quibusdam quasi eius porro dolore. maiores
            debitis? Reiciendis nihil doloribus excepturi.
          </p>
          <img src={hi} alt="me" />
        </div>
      </Container>
    </section>
  );
}

export default About;
