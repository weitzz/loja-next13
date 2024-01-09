import Header from "@/components/Header/Header";
import Container from "@/components/container";
import React from "react";

const Produtolayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="flex items-center flex-col justify-center min-h-[calc(100vh-80px)]">
        {children}
      </main>
    </>
  );
};

export default Produtolayout;
