export const Footer = () => {
  return (
    <footer className="border-t border-white/50 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Rohan Babbar</h3>
            <p className="text-gray-400">Full-Stack Developer | Open to Opportunities</p>
          </div>
          <div className="text-center md:text-right mb-4 md:mb-0">
            <nav className="flex text-sm flex-col md:flex-row md:space-x-6">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
            <div className="flex w-full justify-between gap-4">
              <a href="#overview" className="text-gray-400 hover:text-white transition-colors">Overview</a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>

              </div>
              <div className="flex gap-4">
              <a href="#education" className="text-gray-400 hover:text-white transition-colors">Education</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>

              </div>

            </div>
            </nav>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-4">
          <p>&copy; {new Date().getFullYear()} Rohan Babbar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
