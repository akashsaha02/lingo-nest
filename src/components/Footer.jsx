import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const FooterComp = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Footer container className="bg-gray-800 text-gray-300">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:grid-cols-1">
          <div className="flex flex-col space-x-4">
            <Footer.Brand
              href="https://flowbite.com"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="LingoNest Logo"
              name="LingoNest"
              className="text-accent-1"
            />
            <p className="">Lingo Nest</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" className="text-accent-1" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-bg-2 hover:text-accent-1">
                  Flowbite
                </Footer.Link>
                <Footer.Link href="#" className="text-bg-2 hover:text-accent-1">
                  Tailwind CSS
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" className="text-accent-1" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-bg-2 hover:text-accent-1">
                  Github
                </Footer.Link>
                <Footer.Link href="#" className="text-bg-2 hover:text-accent-1">
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className="text-accent-1" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-bg-2 hover:text-accent-1">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#" className="text-bg-2 hover:text-accent-1">
                  Terms & Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="LingoNest™" year={currentYear} className="text-bg-2" />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
              className="text-bg-2 hover:text-accent-1 transition-colors duration-300"
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
              className="text-bg-2 hover:text-accent-1 transition-colors duration-300"
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
              className="text-bg-2 hover:text-accent-1 transition-colors duration-300"
            />
            <Footer.Icon
              href="#"
              icon={BsGithub}
              className="text-bg-2 hover:text-accent-1 transition-colors duration-300"
            />
            <Footer.Icon
              href="#"
              icon={BsDribbble}
              className="text-bg-2 hover:text-accent-1 transition-colors duration-300"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComp;
