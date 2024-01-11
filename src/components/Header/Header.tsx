"use client";
import Link from "next/link";
import { useState } from "react";

import { RiMenuFill, RiCloseLine } from "react-icons/ri";

import SignInButton from "../SignInButton";

import CartDrawer from "../Cart/Cart";
import { InputSearch } from "../InputSearch/InputSearch";
import { Button } from "../ui/button";

const Header = () => {
  let [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 left-0 bg-slate-900 z-10">
      <div className="mx-auto md:flex items-center  justify-around  py-4 md:px-10 px-7 text-slate-50 flex ">
        <div className="font-semibold text-md cursor-pointer flex items-center ">
          <Link href="/produtos">M Store</Link>
        </div>
        <InputSearch />

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden "
        >
          {open ? <RiCloseLine size={30} /> : <RiMenuFill size={30} />}
        </div>

        <ul
          className={`md:flex md:items-center justify-center text-sm md:pb-0 pb-12 absolute md:static  bg-slate-900  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-8 transition-all duration-500 ease-in ${
            open ? "top-16 " : "top-[-490px]"
          }`}
        >
          <li className="md:ml-8  md:my-0 my-7">
            <Link href="/produtos/cadastrar">Cadastrar</Link>
          </li>
          <li className="md:ml-8  md:my-0 my-7">
            <CartDrawer />
          </li>
          <li className="md:ml-8  md:my-0 my-7 ">
            <SignInButton />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
