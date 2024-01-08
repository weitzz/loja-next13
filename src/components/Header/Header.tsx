"use client";
import Link from "next/link";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";

import SignInButton from "../SignInButton";
import { Button } from "../ui/button";

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

          <div
            onClick={onClick}
            className="md:hidden uppercase cursor-pointer font-semibold "
          >
            Menu
          </div>
          <nav
            className={`${
              !active && "hidden"
            }  absolute flex flex-col bg-slate-900 text-slate-50 items-center top-full w-full left-0 z-20 p-2
                    md:static md:w-auto md:flex`}
          >
            <ul className="md:flex-row md:flex flex-row items-center justify-center gap-4 ">
              <Link href="/produtos/cadastrar">Cadastrar</Link>
              <Button className="gap-2 text-md">
                Carrinho <FaCartShopping />
              </Button>
              <SignInButton />
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
