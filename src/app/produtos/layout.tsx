import Container from "@/components/container";
import React from "react";

const Productlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex items-center flex-col justify-center min-h-[calc(100vh-80px)]">
      <Container>{children}</Container>
    </main>
  );
};

export default Productlayout;
