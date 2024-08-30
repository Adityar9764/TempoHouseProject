import logo from "../../images/logo.jpg";
import Chatbot from "../chatbot/Chatbot";

const Footer = () => {
  return (
    <div className="bg-[#95b3db] text-black font-medium py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <img
            src={logo}
            alt="Tempo House Logo"
            className="h-16 rounded-2xl w-auto md:h-20"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between mb-8 space-y-6 md:space-y-0">
          <div className="md:w-1/3">
            <h3 className="font-semibold text-lg mb-2">Address</h3>
            <p>No 37 GP Road, Chennai - 600002</p>
            <p>
              Godown Address: No 58/54 Mir Bakshi Ali Street, Royapettah,
              Chennai - 14
            </p>
          </div>
          <div className="md:w-1/3">
            <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
            </ul>
          </div>
          <div className="md:w-1/3">
            <h3 className="font-semibold text-lg mb-2">Contact Details</h3>
            <ul className="space-y-2">
              <li>98192891002</li>
              <li>
                <a href="mailto:sample@gmail.com" className="hover:underline">
                  sample@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4">
          <div className="text-center md:text-left">
            &copy; 2024 Tempo House
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
      <Chatbot />
    </div>
  );
};

export default Footer;
