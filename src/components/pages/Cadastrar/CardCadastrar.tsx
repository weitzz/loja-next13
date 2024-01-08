"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FormCadastrar } from "./FormCadastrar";
import Container from "@/components/container";

const CardCadastrar = () => {
  return (
    <Card className="w-[650px]">
      <CardHeader>
        <CardTitle>Cadastrar produto</CardTitle>
      </CardHeader>

      <CardContent>
        <FormCadastrar />
      </CardContent>
    </Card>
  );
};

export default CardCadastrar;
