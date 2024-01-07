"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import Container from "@/components/container";
import { Label } from "@/components/ui/label";
import { useForm, SubmitHandler } from "react-hook-form";
import { api } from "@/lib/api";

type Inputs = {
  name: string;
  price: string;
  description: string;
};

const Cadastrar = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const response = await api.post("/produtos", {
      name: data.name,
      price: data.price,
      description: data.description,
    });
    console.log(response.data);
  };
  return (
    <Container>
      <Card>
        <CardHeader>
          <CardTitle>Cadastrar produto</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Produto" {...register("name")} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="price">Preço</Label>
                <Input id="price" placeholder="Preço" {...register("price")} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="description">Descrição</Label>
                <Input placeholder="Descrição" {...register("description")} />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancelar</Button>
            <Button>Cadastrar</Button>
          </CardFooter>
        </form>
      </Card>
    </Container>
  );
};

export default Cadastrar;
