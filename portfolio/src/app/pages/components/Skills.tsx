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
    <section id="skills" className="text-center mb-20 w-full">

      <div className="flex justify-center flex-wrap">
        <div>
          <div className="text-2xl font-bold mb-8">
            <span>Front-End</span>
          </div>
          <div className="flex p-8 flex-wrap items-center justify-around" style={{ border: '4px solid #15616D', borderRadius: '5rem' }}>
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
          <div className="text-2xl font-bold my-8">
            <span>Back-End</span>
          </div>
          <div className="flex p-8 flex-wrap items-center justify-around" style={{ border: '4px solid #15616D', borderRadius: '5rem' }}>
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
          <div className="text-2xl font-bold my-8">
            <span>Languages</span>
          </div>
          <div className="flex p-8 flex-wrap items-center justify-around" style={{ border: '4px solid #15616D', borderRadius: '5rem' }}>
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
          <div className="text-2xl font-bold my-8">
            <span>Tools</span>
          </div>
          <div className="flex p-8 flex-wrap items-center justify-around" style={{ border: '4px solid #15616D', borderRadius: '5rem' }}>
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
