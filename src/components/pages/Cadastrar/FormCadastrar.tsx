"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cadastroSchema } from "@/validations/schemaCadastrar";
import { CardFooter } from "@/components/ui/card";
import { api } from "@/lib/api";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export function FormCadastrar() {
  const router = useRouter();
  const form = useForm<FormProps>({
    resolver: zodResolver(cadastroSchema),
  });

  type FormProps = z.infer<typeof cadastroSchema>;

  async function onSubmit(data: FormProps) {
    const response = await api.post("http://localhost:3000/api/produtos", {
      name: data.name,
      description: data.description,
      price: Number(data.price),
    });

    router.refresh();
    router.replace("/produtos");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome do Produto</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage>{form.formState.errors.name?.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preço</FormLabel>
              <FormControl>
                <Input {...field} placeholder="R$ 0.00" />
              </FormControl>
              <FormMessage>{form.formState.errors.price?.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage>
                {form.formState.errors.description?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <CardFooter className="flex justify-between">
          <Button variant="outline" asChild>
            <Link href="/produtos">Voltar</Link>
          </Button>
          <Button type="submit">Cadastrar</Button>
        </CardFooter>
      </form>
    </Form>
  );
}
