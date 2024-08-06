import LogoIcon from "../assets/logo.svg";
import MenuIcon from "../assets/icon-menu.svg";
import Button from "@/components/Button";

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container mx-auto">
        <div className="flex md:backdrop-blur justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-5xl mx-auto ">
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15 ">
              <LogoIcon className="h-8 w-8" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex text-sm gap-8 text-white/70">
              <a className="hover:text-white transition-all" href="#overview">
                Overview
              </a>
              <a className="hover:text-white transition-all" href="#projects">
                Projects
              </a>
              <a className="hover:text-white transition-all" href="#education">
                Education
              </a>
              <a className="hover:text-white transition-all" href="#contact">
                Contact
              </a>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
          <a href="/Rohan Babbar (5).pdf" download="Rohan Babbar.pdf">
              <Button>Resume</Button>
            </a>
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
