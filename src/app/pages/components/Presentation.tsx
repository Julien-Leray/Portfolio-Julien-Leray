const Presentation = () => {
  return (
    <section
      id="presentation"
      className="min-h-screen flex flex-col items-center justify-center text-secondary p-4 md:p-8"
    >
      <div className="flex flex-col md:flex-row items-center md:space-x-8 mb-16 md:mb-40 md:flex-wrap md:justify-center">
        <div
          className="text-center md:max-w-2xl p-8 md:p-16"
          style={{ border: '4px solid #15616D', borderRadius: '6rem' }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-8 md:mb-12">
            Hello, I&apos;m Julien Leray
          </h1>
          <p className="mt-8 md:mt-16 text-xl md:text-2xl mb-8">
            I am a passionate, results-oriented web developer known for my rigor,
            dynamism, and strong communication skills. My dedication drives me to
            consistently deliver high-quality, innovative solutions in a
            collaborative environment.
          </p>
          <div className="mt-8 md:mt-16 flex justify-center">
            <a
              href="#about"
              className="text-xl md:text-2xl bg-gray-800 hover:bg-gray-500 text-white font-bold py-4 px-8 rounded-full"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="mt-8 md:mt-16 flex justify-center md:justify-start md:pl-36">
          <img
            src="/me.png"
            alt="Picture of me"
            className="w-64 md:w-80 lg:w-96"
            style={{ border: '4px solid #15616D', borderRadius: '20rem' }}
          />
        </div>
      </div>
      <div className="flex space-x-4 md:space-x-10 mt-8 md:mt-16">
        <a href="https://www.linkedin.com/in/leray-julien">
          <img
            src="linkedIn.png"
            alt="Link to my LinkedIn Profile"
            className="w-12 md:w-16 lg:w-20"
          />
        </a>
        <a href="https://github.com/lerayjulien">
          <img
            src="github.png"
            alt="Link to my GitHub profile"
            className="w-12 md:w-16 lg:w-20"
          />
        </a>
      </div>
      <button className="mt-16 md:mt-40 animate-bounce">
        <a href="#about">
          <img
            src="https://assets-global.website-files.com/615b66ec9bfbd548ea22bcf0/615cbb83b2113ff1a45b36c7_svgexport-3.svg"
            loading="lazy"
            alt="scroll button"
            className="w-12 md:w-16"
          />
        </a>
      </button>
    </section>
  );
};

export default Presentation;
