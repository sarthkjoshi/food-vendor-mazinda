"use client";

import React, { useState, useEffect } from "react";
import Script from "next/script";
import LogoMain from "@/public/logoMain.png";
import Cookies from "js-cookie";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NavbarVendor = () => {
  const router = useRouter();

  const vendor_token = Cookies.get("vendor_token");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (!vendor_token) {
      router.push("/vendor/auth/login");
    }
  }, []);

  return (
    <>
      <nav className="border-gray-200 p-5 shadow-md">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <Link href="/vendor" className="flex">
            <Image src={LogoMain} width={100} alt="Citikartt" />
          </Link>
          {vendor_token && (
            <>
              <button
                data-collapse-toggle="mobile-menu"
                type="button"
                className="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center ml-auto mr-1"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
                onClick={() => {
                  setShowDropdown(!showDropdown); // Toggle the dropdown
                }}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                className={`md:block w-full md:w-auto ml-auto mr-10 ${
                  showDropdown ? "" : "hidden"
                }`}
                id="mobile-menu"
              >
                <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                  <li>
                    <Link
                      href="/"
                      className="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded focus:outline-none"
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <div className="relative">
                      <button
                        className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto text-md"
                        onClick={() => {
                          Cookies.remove("vendor_token");
                          router.push("/vendor/auth/login");
                          setShowDropdown(false);
                        }}
                      >
                        Logout
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </nav>
      <Script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js" />
    </>
  );
};

export default NavbarVendor;
