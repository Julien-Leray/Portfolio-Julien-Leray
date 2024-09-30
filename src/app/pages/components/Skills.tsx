const skillsFront = [
  {
    name: "HTML5",
    src: "/skills/html5.png",
  },
  {
    name: "CSS3",
    src: "/skills/css3.png",
  },

  {
    name: "React.js",
    src: "/skills/react.png",
  },

  {
    name: "Next.js",
    src: "/skills/nextjs.webp",
  },
];

const skillsBack = [
  {
    name: "Node.js",
    src: "/skills/node.png",
  },

  {
    name: "MongoDB",
    src: "/skills/mongodb.png",
  },
  {
    name: "PostgreSQL",
    src: "/skills/postgresql.png",
  },
  {
    name: "GraphQL",
    src: "/skills/graphql.png",
  },
  {
    name: 'EJS',
    src: '/skills/ejs.png'
  }
];

const skillsLanguages = [
  {
    name: 'JavaScript',
    src: '/skills/javascript.png'
  },
  {
    name: 'TypeScript',
    src: '/skills/typescript.png'
  },
  {
    name: 'C#',
    src: '/skills/c.png'
  },
]

const skillsTools = [
  {
    name: 'Git',
    src: '/skills/git.png'
  },
  {
    name: 'Docker',
    src: '/skills/docker.png'
  },
  {
    name: 'Figma',
    src: '/skills/figma.png'
  },
]

const Skills = () => {


  return (
    <section id="skills" className="text-center mb-20 w-full text-secondary">

      <div className="flex justify-center flex-wrap">
        <div>
          <div className="text-2xl font-bold my-8 text-primary">
            <span>Front-End</span>
          </div>
          <div className="flex p-8 flex-wrap items-center justify-around bg-gradient-to-br from-primary to-secondary rounded-[50px]">
            {skillsFront.map((skill) => (
              <div key={skill.name} className="m-4 flex flex-col items-center justify-center text-center">
                <img src={skill.src} alt={skill.name} className="w-14 h-14 md:w-32 md:h-32 object-contain" />
                <div className="p-4">
                  <h3 className="md:text-2xl font-bold mb-2">{skill.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-2xl font-bold my-8 text-primary">
            <span>Back-End</span>
          </div>
          <div className="flex p-8 flex-wrap items-center justify-around md:ml-4  bg-gradient-to-bl from-primary to-secondary rounded-[50px]">
            {skillsBack.map((skill) => (
              <div key={skill.name} className="m-4 flex flex-col items-center justify-center text-center">
                <img src={skill.src} alt={skill.name} className="w-14 h-14 md:w-32 md:h-32 object-contain" />
                <div className="p-4">
                  <h3 className="md:text-2xl font-bold mb-2">{skill.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-2xl font-bold my-8 text-primary">
            <span>Languages</span>
          </div>
          <div className="flex p-8 flex-wrap items-center justify-around md:ml-4  bg-gradient-to-br from-primary to-secondary rounded-[50px]">
            {skillsLanguages.map((skill) => (
              <div key={skill.name} className="m-4 flex flex-col items-center justify-center text-center">
                <img src={skill.src} alt={skill.name} className="w-14 h-14 md:w-32 md:h-32 object-containn" />
                <div className="p-4">
                  <h3 className="md:text-2xl font-bold mb-2">{skill.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-2xl font-bold my-8 text-primary">
            <span>Tools</span>
          </div>
          <div className="flex p-8 flex-wrap items-center justify-around md:ml-4  bg-gradient-to-bl from-primary to-secondary rounded-[50px]">
            {skillsTools.map((skill) => (
              <div key={skill.name} className="m-4 flex flex-col items-center justify-center text-center">
                <img src={skill.src} alt={skill.name} className="w-14 h-14 md:w-32 md:h-32 object-contain" />
                <div className="p-4">
                  <h3 className="md:text-2xl font-bold mb-2">{skill.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
