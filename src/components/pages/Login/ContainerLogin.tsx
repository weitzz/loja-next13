import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { FormLogin } from ".";

export const ContainerLogin = () => {
  return (
    <main className="flex items-center flex-col justify-center min-h-[calc(100vh-80px)]">
      <Card className="w-[350px]">
        <CardHeader className="flex items-center ">
          <CardTitle>Login</CardTitle>
          <CardDescription>Seja bem vindo</CardDescription>
        </CardHeader>
        <CardContent>
          <FormLogin />
        </CardContent>
      </Card>
    </main>
  );
};
