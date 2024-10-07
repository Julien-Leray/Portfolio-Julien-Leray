const projects = [
  {
    title: "O'Jardin",
    description: "A web app for gardenners to learn about plants and make a virtual garden.",
    link: "https://ojardin.julien-leray.com/",
    image: "/projects/Ojardin.png"
  },

  {
    title: "My Portfolio",
    description: "The website you are currently on, builded with Next.js, React and TailwindCSS.",
    link: "https://julien-leray.com/",
    image: "/projects/Portfolio.png"
  }

];

const Projects = () => {
  return (
    <section id="projects" className="py-16 text-center min-h-screen md:mt-28 mt-20">
      <h2 className="text-4xl md:text-6xl font-bold mb-12">Projects</h2>
      <div className="flex flex-wrap justify-center">
        {projects.map((project) => (
          <div key={project.title} className="w-80 md:w-96 m-4 bg-quaternary text-primary border-2 border-teal-600 p-4 rounded-3xl ">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-3xl" />
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-lg mb-8">{project.description}</p>
              <a href={project.link} className="text-xl md:text-lg bg-primary text-secondary hover:bg-white font-bold py-2 px-4 rounded-full">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
