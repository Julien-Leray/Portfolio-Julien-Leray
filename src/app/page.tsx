import Head from 'next/head';
import { Inter } from 'next/font/google';
import Presentation from './pages/components/Presentation';
import About from './pages/components/About';
import Projects from './pages/components/Projects';
import Contact from './pages/components/Contact';
import Navbar from './pages/components/NavBar';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Julien Leray's Portfolio</title>
        <meta name="description" content="Julien Leray's personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mb-32">
        <section id="navbar">
          <Navbar />
        </section>
      </div>
      <div className=" bg-site-background text-secondary snap-y snap-mandatory overflow-y-scroll lg:h-screen">
        <section id="presentation" className="snap-start min-h-screen flex items-center justify-center p-4">
          <Presentation />
        </section>
        <section id="about" className="snap-start min-h-screen flex items-center justify-center p-4">
          <About />
        </section>
        <section id="projects" className="snap-start min-h-screen flex items-center justify-center p-4">
          <Projects />
        </section>
        <section id="contact" className="snap-start min-h-screen items-center justify-center p-4">
          <Contact />
        </section>
      </div>
    </>
  );
}