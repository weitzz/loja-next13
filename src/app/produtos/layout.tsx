import Header from "@/components/Header/Header";
import Container from "@/components/container";
import React from "react";

const Produtolayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Produtolayout;
