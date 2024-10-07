const Presentation = () => {
  return (
    <section
      id="presentation"
      className="min-h-screen flex flex-col items-center justify-center text-primary p-4 md:p-8 mt-20 md:mt-2"
    >
      <div className="flex flex-col md:flex-row items-center md:space-x-8 mb-16 md:flex-wrap md:justify-center">
        <div
          className="text-center p-8 md:p-16 md:w-2/3 md:text-left  text-primary"
          style={{ borderRadius: '2rem' }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-8 md:mb-12">
            Turning ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">interactive realities </span>with efficient and rigorous code.
          </h1>

        </div>
        <div>
          <div className=" flex justify-center md:pl-12">
            <img
              src="/me.png"
              alt="Picture of me"
              className="w-32 md:w-48 lg:w-48 rounded-full"

            />
          </div>
          <div className="text-5xl font-bold ml-2 flex justify-center md:pl-12 pt-4">

            <a
              href="/Leray-Julien.pdf"
              download
              className="text-lg md:text-2xl hover:bg-white text-secondary bg-primary rounded-full py-2 px-4 font-bold "
            >
              My resume
            </a>
          </div>


        </div>
      </div>

      <button className="animate-bounce">
        <a href="#about">
          <img
            src="https://assets-global.website-files.com/615b66ec9bfbd548ea22bcf0/615cbb83b2113ff1a45b36c7_svgexport-3.svg"
            loading="lazy"
            alt="scroll button"
            className="w-12 md:w-16 md:mt-36"
          />
        </a>
      </button>
    </section>
  );
};

export default Presentation;


