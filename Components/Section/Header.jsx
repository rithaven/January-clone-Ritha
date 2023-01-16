import React from "react";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [show, setShow] = useState(false);

  return (
    <div className="sticky top-0 z-10 max-w-6xl m-auto">
      <div className="flex justify-between flex-shrink-0 px-20 py-10 bg-white sm:px-3 sm:py-4">
        <div className="w-[297px] h-[60px]">
          <div className="sm:w-[222px] sm:h-[45px]">
            <img src="../../logo.svg" />
          </div>
        </div>
        <img
          className="hidden mt-2 sm:block w-[24px] h-[24px]"
          src="https://www.svgrepo.com/show/473963/menu-hamburger.svg"
          alt=""
        />

        <ul className="flex gap-3 sm:hidden">
          <li className="cursor-pointer">
            <img
              src="../../language.svg"
              width={50}
              height={30}
              alt=""
              className="-mt-1"
            />
          </li>
          <li className="cursor-pointer">
            <img
              src="https://www.svgrepo.com/show/473369/search.svg"
              width={30}
              height={30}
              alt=""
            />
          </li>
        
          <li className="cursor-pointer" onClick={() => setShow(!show)}>
            <img
              src="https://www.svgrepo.com/show/473963/menu-hamburger.svg"
              width={30}
              height={30}
              alt=""
            />
          </li>
        </ul>
      </div>
      {show && (
        <div className="h-screen z-[9999] relative bg-[#333333] bg-opacity-90 text-white -mt-36">
          <div className="flex items-center bg-[#333333] justify-between px-[5.625rem] py-10">
            <div>
              <img
                className="w-[300px]"
                src="https://www.student.uni-stuttgart.de/system/modules/de.stuttgart.uni.v3.basics/resources/img/svg/logo-inverted-en.svg"
              />
            </div>
            <div className="flex items-center gap-2">
              <span>
                <img
                  className="cursor-pointer"
                  src="../../search-s.svg"
                  width={30}
                  height={30}
                />
              </span>
              <span onClick={() => setShow(!show)}>
                <img
                  className="cursor-pointer"
                  src="../../x.svg"
                  width={30}
                  height={30}
                />
              </span>
            </div>
          </div>
          <div className="pt-10">
            <div className="flex flex-col gap-5 text-lg text-white px-[5.625rem]">
              {["home", "about", "contact", "blog", "pages", "More"].map(
                (item, i) => {
                  return (
                    <span className="border-b-2 border-dashed p-2 hover:bg-[#00bcff]">
                      <Link
                        href={item}
                        key={i}
                        className="flex justify-between"
                      >
                        <span>{item}</span>
                        <span>
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            viewBox="0 0 64 64"
                            stroke-width="3"
                            stroke="#fff"
                            fill="#444444"
                          >
                            <polyline points="18.86 57.47 44.12 30.84 18.86 6.58" />
                          </svg>
                        </span>
                      </Link>
                    </span>
                  );
                }
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
