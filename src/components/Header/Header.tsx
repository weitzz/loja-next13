import Link from "next/link";
import React from "react";
import SignInButton from "../SignInButton";

const Header = () => {
  return (
    <header className="w-full h-16 sm:h-28  text-slate-500 px-2 border border-gray-300 ">
      <div className="max-w-screen-xl mx-auto flex justify-center items-center h-28 sm:justify-between">
        <nav className="flex justify-center items-center gap-4">
          <Link href="/produtos" rel="preload">
            Produtos
          </Link>
          <Link href="/produtos/cadastrar" rel="preload">
            Cadastrar
          </Link>
          <Link href="/produtos/cadastrar" rel="preload">
            Carrinho
          </Link>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
};

export default Header;
