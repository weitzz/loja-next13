"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FormCadastrar } from "./FormCadastrar";

const ContainerCadastrar = () => {
  return (
    <div className="flex flex-col">
      <Card className="md:w-full lg:w-96">
        <CardHeader>
          <CardTitle>Cadastrar produto</CardTitle>
        </CardHeader>

        <CardContent>
          <FormCadastrar />
        </CardContent>
      </Card>
    </div>
  );
};

export default ContainerCadastrar;
