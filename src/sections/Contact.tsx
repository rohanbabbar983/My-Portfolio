import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import stars from "../assets/stars.png";
import gridlines from "../assets/grid-lines.png"

const Contact = () => {
  return (
    <section id="contact" className="py-10">
      <div className="container mx-auto px-4">
        <div className="border border-white/15 py-24 rounded-xl overflow-hidden relative" style={
          {
            backgroundImage: `url(${stars.src})`
          }
        }>
        <div className="absolute inset-0 bg-blend-overlay bg-[rgb(74,32,138)] [mask-image:radial-gradient(50%_50%_at_50%_45%,black,transparent)]  "style={{
            backgroundImage: `url(${gridlines.src})`
          }

        }></div>
        <div className="relative">
        <h2 className="text-4xl font-bold mb-4 text-center">Connect With Me!</h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto tracking-tight md:text-xl text-center mt-5">
          Feel free to contact me for any inquiries, collaborations, or just to say hello. I am always open to discussing new projects, sharing insights, or exploring opportunities.
        </p>
        <div className="flex justify-center space-x-6 mt-5">
          <a
            href="https://www.linkedin.com/in/rohan-babbar-039512239/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-blue-600 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="mailto:rohanbabbar2003@gmail.com"
            className="text-gray-200 hover:text-red-600 transition duration-300"
            aria-label="Email"
          >
            <FaEnvelope size={30} />
          </a>
          <a
            href="https://github.com/rohanbabbar983"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-gray-800 transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={30} />
          </a>
        </div>
        </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
