"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import Link from "next/link";

import { FcGoogle } from "react-icons/fc";

export function Login() {
  return (
    <>
      <form
        id="loginform"
        className="flex flex-col gap-2 mx-auto max-w-lg mt-10"
      >
        <Input placeholder="email@email.com" type="text" name="email" />
        <Input placeholder="Senha" type="password" name="password" />
        <Button type="submit">Entrar</Button>
      </form>
      <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-blue-300 after:ml-4 after:block after:h-px after:flex-grow after:bg-blue-300">
        ou
      </div>
      <div className="flex flex-col gap-2 mx-auto max-w-lg mt-10 ">
        <Button onClick={() => signIn("google")}>
          {" "}
          <FcGoogle className="mr-1" />
          Entrar com Google
        </Button>
        {/* {error && (
          <div className=" w-full bg-red-500 text-white  text-sm py-1 px-3 rounded-md mt-2">
            {error}
          </div>
        )} */}
        <p className="text-center text-sm text-gray-600 mt-2">
          Se você não tem uma conta, por favor
          <Link className="text-blue-500 hover:underline ml-2" href="/register">
            Registre-se
          </Link>
        </p>
      </div>
    </>
  );
}
