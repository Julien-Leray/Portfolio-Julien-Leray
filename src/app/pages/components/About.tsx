"use client";
import Skills from "./Skills";

const About = () => {
  return (
    <>
      <div className="min-h-screen text-center flex flex-col p-4 md:flex-wrap md:mt-44 w-full ">
        <section id="about" className="mb-32 top-full ">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">About Me</h2>
          <p className="text-lg md:text-2xl mb-4 mt-8 ">
            After an enriching one-year family trip across the American continent, I chose to
            redirect my career towards IT development. My insatiable curiosity and passion for
            technical challenges have led me to explore this dynamic field with all the energy that
            characterizes me. With strong problem-solving skills and effective communication, I am
            looking for an exciting and stimulating opportunity.
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
