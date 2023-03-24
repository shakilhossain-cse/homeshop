import React from "react";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-gray-100 pt-16 pb-12 border-gray-100 border-t">
      <div className="container grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-1 space-y-8">
          <img src={logo} alt="logo" className="w-56" />
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <i className="fab fa-facebook" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <i className="fab fa-twitter" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <i className="fab fa-instagram" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Company
              </h3>
              <div className="mt-4 space-y-4">
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Blogs
                </a>
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Jobs
                </a>
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Press
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Legal
              </h3>
              <div className="mt-4 space-y-4">
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Claim
                </a>
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Policy
                </a>
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Terms
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Solutions
              </h3>
              <div className="mt-4 space-y-4">
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Marketing
                </a>
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Analytics
                </a>
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Commerce
                </a>
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Insights
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Support
              </h3>
              <div className="mt-4 space-y-4">
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Documentation
                </a>
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Guides
                </a>
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  API Status
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
