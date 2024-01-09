"use client";
import Link from "next/link";
import { useState } from "react";

import { RiMenuFill } from "react-icons/ri";
import { SignInButton } from "../SignInButton";

import CartDrawer from "../Cart/Cart";
import { InputSearch } from "../InputSearch/InputSearch";

const Header = () => {
  const [active, setActive] = useState(false);
  const onClick = () => {
    setActive(!active);
  };
  return (
    <>
      <header className="relative  w-full bg-slate-900 text-slate-50 ">
        <div className=" mx-auto flex items-center justify-around p-2">
          <Link href="/produtos" className="text-md font-semibold ">
            M Store
          </Link>

          <InputSearch />

          <div
            onClick={onClick}
            className="md:hidden uppercase cursor-pointer font-semibold "
          >
            <RiMenuFill />
          </div>
          <nav
            className={`${
              !active && "hidden"
            }  absolute flex flex-col bg-slate-900 text-slate-50 items-center top-full w-full left-0 z-20 p-2
                    md:static md:w-auto md:flex`}
          >
            <ul className="md:flex-row md:flex flex-row items-center justify-center gap-4 ">
              <Link href="/produtos/cadastrar">Cadastrar</Link>
              <CartDrawer />
              <li className="list-none md:mr-2">
                <SignInButton />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
