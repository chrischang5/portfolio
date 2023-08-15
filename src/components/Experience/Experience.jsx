import React from "react";

import Container from "../Utility/Container.jsx";

function Experience() {
  var text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, beatae commodi dolorem eveniet ex velit esse laborum ipsum impedit facilis adipisci fugit quibusdam facere praesentium ea distinctio optio molestias obcaecati?";
  return (
    <section id="experience">
      <Container>
        <h1 className="mb-2 mt-0 text-5xl font-medium leading-tight text-primary">
          Work Experience
        </h1>
        <main>
          <div>
            <>
              <h1 className="mb-2 mt-0 text-3xl font-medium leading-tight text-primary">
                CareCru
              </h1>
              <div>
                Software Engineering Co-op
                <p className="text-base leading-relaxedmx-auto">
                  <ul>
                    <li>
                      <span>
                        Collaborated in an agile environment
                        with developers to plan user
                        stories, project requirements, and
                        project timelines.
                      </span>
                    </li>
                    <li>
                      <span>
                        Designed and integrated JavaScript
                        and Cypress.io test scripts with
                        Jenkins to automate testing
                        workflows for three user features
                        and increase API test coverage by
                        10%.
                      </span>
                    </li>
                  </ul>
                </p>
              </div>
            </>
          </div>
        </main>
      </Container>
    </section>
  );
}

export default Experience;
