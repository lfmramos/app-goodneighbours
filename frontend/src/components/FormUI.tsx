"use client";

import React, { useState } from "react";
import { Form } from "@nextui-org/form";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import axios from "axios";
import { z } from "zod";
import { useRouter } from "next/navigation"; // Correct import for Next.js router
import { toast } from 'sonner'; // Import toast from sonner

// Define the Zod schema for the form data
const FormDataSchema = z.object({
  "Primeiro nome": z.string().nonempty("Por favor, entre com um nome válido"),
  Apelido: z.string().nonempty("Por favor, entre com um nome válido"),
  NIF: z.string().nonempty("Por favor, entre com um NIF válido"),
  CC: z.string().nonempty("Por favor, entre com um número válido"),
  "Data de nascimento": z.string().nonempty("Entre com uma data válida"),
  email: z.string().email("Please enter a valid email"),
  Telefone: z.string().nonempty("Por favor, entre com um número válido"),
  Morada: z.string().nonempty("Por favor, entre com uma morada válida"),
  Cidade: z.string().nonempty("Por favor, entre com uma cidade válida"),
  Freguesia: z.string().nonempty("Por favor, entre com uma freguesia válida"),
  "Código postal": z.string().nonempty("Por favor, entre com um código postal válido"),
  username: z.string().nonempty("Por favor, entre com um username válido"),
});

// Define the type for the field mapping
type FieldMapping = {
  [key: string]: string;
};

// Mapping object to translate Portuguese field names to English
const fieldMapping: FieldMapping = {
  "Primeiro nome": "firstName",
  Apelido: "lastName",
  NIF: "nif",
  CC: "cc",
  "Data de nascimento": "birthDate",
  email: "email",
  Telefone: "phone",
  Morada: "address",
  Cidade: "city",
  Freguesia: "neighbourhood",
  "Código postal": "zipcode",
  username: "username",
};

// Function to transform form data keys from Portuguese to English
const transformDataKeys = (data: Record<string, string>) => {
  const transformedData: Record<string, string> = {};
  for (const key in data) {
    if (fieldMapping[key]) {
      transformedData[fieldMapping[key]] = data[key];
    }
  }
  return transformedData;
};

// Function to transform date format from dd-mm-yyyy to yyyy-mm-dd
const transformDateFormat = (date: string) => {
  const [day, month, year] = date.split("-");
  return `${year}-${month}-${day}`;
};

export default function FormUI() {
  const [action, setAction] = useState<string | null>(null); // Local state for action feedback
  const router = useRouter(); // Correct usage of useRouter hook from next/router

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Capture form data
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;

    // Validate the data using Zod schema
    const validation = FormDataSchema.safeParse(data);
    if (!validation.success) {
      console.error("Validation failed:", validation.error.errors);
      return;
    }

    // Transform the data keys to English
    const transformedData = transformDataKeys(validation.data);

    // Transform the date format (if necessary)
    if (transformedData.birthDate) {
      transformedData.birthDate = transformDateFormat(transformedData.birthDate);
    }

    try {
      const response = await axios.post(
        "http://ec2-52-0-11-92.compute-1.amazonaws.com/api/volunteers", // Replace with your actual API endpoint
        transformedData
      );
      console.log("Submission successful:", response.data); // Log successful response
      toast.success('Registration successful! Redirecting to the home page...');
      setTimeout(() => {
        router.push("/"); // Navigate to the initial page after showing the toast
      }, 3000); // Adjust the delay as needed
    } catch (error) {
      console.error("Error submitting form:", error);
      setAction(`error ${(error as Error).message}`);
      toast.error('Error submitting form. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      {/* Container do formulário */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg mx-4">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">Formulário</h1>
        <Form
          className="flex flex-col gap-4"
          validationBehavior="native"
          onReset={() => setAction("reset")}
          onSubmit={handleSubmit}
        >
          {/* Form fields */}
          <Input
            isRequired
            errorMessage="Por favor, entre com um nome válido"
            label="Primeiro nome"
            labelPlacement="outside"
            name="Primeiro nome"
            placeholder="Entre com o primeiro nome"
            type="text"
          />
          <Input
            isRequired
            errorMessage="Por favor, entre com um nome válido"
            label="Apelido"
            labelPlacement="outside"
            name="Apelido"
            placeholder="Entre com o apelido"
            type="text"
          />
          <Input
            isRequired
            errorMessage="Por favor, entre com um NIF válido"
            label="NIF"
            labelPlacement="outside"
            name="NIF"
            placeholder="Digite o NIF"
            type="number"
          />
          <Input
            isRequired
            errorMessage="Por favor, entre com um número válido"
            label="CC"
            labelPlacement="outside"
            name="CC"
            placeholder="Digite o Número do Cartão Cidadão"
            type="number"
          />
          <Input
            isRequired
            errorMessage="Entre com uma data válida"
            label="Data de nascimento"
            labelPlacement="outside"
            name="Data de nascimento"
            placeholder="Entre com a data de nascimento"
            type="text" // Use text input to allow dd-mm-yyyy format
          />
          <Input
            isRequired
            errorMessage="Please enter a valid email"
            label="Email"
            labelPlacement="outside"
            name="email"
            placeholder="Entre com seu email"
            type="email"
          />
          <Input
            isRequired
            errorMessage="Por favor, entre com um número válido"
            label="Telefone"
            labelPlacement="outside"
            name="Telefone"
            placeholder="Digite seu telefone"
            type="number"
          />
          <Input
            isRequired
            errorMessage="Por favor, entre com uma morada válida"
            label="Morada"
            labelPlacement="outside"
            name="Morada"
            placeholder="Digite sua morada"
            type="text"
          />
          <Input
            isRequired
            errorMessage="Por favor, entre com uma cidade válida"
            label="Cidade"
            labelPlacement="outside"
            name="Cidade"
            placeholder="Digite sua cidade"
            type="text"
          />
          <Input
            isRequired
            errorMessage="Por favor, entre com uma freguesia válida"
            label="Freguesia"
            labelPlacement="outside"
            name="Freguesia"
            placeholder="Digite sua freguesia"
            type="text"
          />
          <Input
            isRequired
            errorMessage="Por favor, entre com um código postal válido"
            label="Código postal"
            labelPlacement="outside"
            name="Código postal"
            placeholder="Digite o código postal"
            type="number"
          />
          <Input
            isRequired
            errorMessage="Por favor, entre com um username válido"
            label="Username"
            labelPlacement="outside"
            name="username"
            placeholder="Digite seu username"
            type="text"
          />

          {/* Buttons */}
          <div className="flex gap-4 justify-center mt-4">
            <Button color="secondary" type="submit">
              Enviar
            </Button>
            <Button color="secondary" type="reset" variant="flat">
              Limpar campos
            </Button>
          </div>
          {/* Feedback de ação */}
          {action && (
            <div className="text-sm text-gray-500 mt-4 text-center">
              Ação: <code>{action}</code>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
}
