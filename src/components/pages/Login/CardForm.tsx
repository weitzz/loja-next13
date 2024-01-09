import Container from "@/components/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { Login } from ".";

export const CardForm = () => {
  return (
    <main className="flex items-center flex-col justify-center min-h-[calc(100vh-80px)]">
      <Card className="w-[350px]">
        <CardHeader className="flex items-center ">
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Login />
        </CardContent>
      </Card>
    </main>
  );
};
