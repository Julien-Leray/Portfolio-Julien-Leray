const projects = [
  {
    title: "O'Jardin",
    description: "A web app for gardenners to learn about plants and make a virtual garden.",
    link: "https://ojardin.galakindustries.eu/",
    image: "/projects/Ojardin.png"
  },
  {
    title: "Wilsonport",
    description: "A multi-page website for a logistics and transport company.",
    link: "#",
    image: "/images/wilsonport.png"
  },
  {
    title: "Boreal Coffee Clone",
    description: "Recreated the frontend of Boreal Coffee's official web app.",
    link: "#",
    image: "/images/boreal-coffee.png"
  },
  {
    title: "Crown Template",
    description: "A web template targeting the restaurant and food industry.",
    link: "#",
    image: "/images/crown-template.png"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 text-center min-h-screen md:mt-28">
      <h2 className="text-4xl md:text-6xl font-bold mb-12">Projects</h2>
      <div className="flex flex-wrap justify-center">
        {projects.map((project) => (
          <div key={project.title} className="w-80 m-4 bg-white shadow-lg bg-opacity-25 p-4 rounded-3xl ">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-3xl" />
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-lg mb-4">{project.description}</p>
              <a href={project.link} className="text-xl md:text-lg bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
