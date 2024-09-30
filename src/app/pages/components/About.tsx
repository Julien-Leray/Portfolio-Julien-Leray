"use client";
import Skills from "./Skills";

const About = () => {
  return (
    <>
      <div className="min-h-screen text-center flex flex-col p-4 md:flex-wrap md:mt-44 w-full ">
        <section id="about" className="mb-32 top-full ">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-16">About Me</h2>
          <p className="text-lg md:text-2xl mb-4 mt-8 ">
            As a passionate full-stack web developer, I am comfortable with all stages of the development cycle, from back-end to user interface. My approach is focused on optimization, code quality, and collaboration within multidisciplinary teams to deliver solutions that meet user needs. Always staying up to date with the latest technologies, I enjoy taking on challenges and learning new skills to stay at the forefront of innovations.
          </p>
          <p className="text-lg md:text-2xl text-center mb-4 mt-8">
            I have experience in the following technologies.
          </p>
        </section>
        <Skills />

      </div>
    </>
  );
};

export default About;
