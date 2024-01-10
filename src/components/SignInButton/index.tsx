"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

import { FiUser } from "react-icons/fi";
import { Button } from "../ui/button";

export const SignInButton = () => {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <div className="sm:flex justify-center items-center gap-2 text-sm sm:flex-row">
          <span>Olá, {session?.user?.name || session?.user?.email}</span>
          {session.user?.image ? (
            <Image
              src={session?.user?.image}
              width={25}
              height={25}
              quality={100}
              className="rounded-full"
              alt="foto de perfil ou logotipo"
            />
          ) : (
            <FiUser size={25} />
          )}
          <Button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="text-md text-slate-900"
            variant="outline"
          >
            Sair
          </Button>
        </div>
      ) : (
        <div className="hidden sm:flex justify-center items-center gap-2">
          <Button onClick={() => signIn("google")} className="text-md">
            Entrar
          </Button>
        </div>
      )}
    </>
  );
};
export default SignInButton;
