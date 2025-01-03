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
  "Data de nascimento": z.string().nonempty("Por favor, entre com uma data válida"),
  email: z.string().email("Por favor, entre com um email válido"),
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

const FormUI = () => {
  const [formData, setFormData] = useState({
    "Primeiro nome": "",
    Apelido: "",
    NIF: "",
    CC: "",
    "Data de nascimento": "",
    email: "",
    Telefone: "",
    Morada: "",
    Cidade: "",
    Freguesia: "",
    "Código postal": "",
    username: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      FormDataSchema.parse(formData); // Validate form data
      await axios.post("/api/submit", formData); // Submit form data
      toast.success("Formulário enviado com sucesso!");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error("Por favor, corrija os campos destacados.");
      } else {
        toast.error("Falha ao enviar o formulário. Por favor, verifique suas entradas.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg md:max-w-xl lg:max-w-2xl mx-4">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">Formulário</h1>
        <Form
          className="flex flex-col items-center gap-4"
          aria-label="Formulário de inscrição"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-4 w-full">
            <Input
              isRequired
              label="Primeiro nome"
              name="Primeiro nome"
              placeholder=" "
              aria-label="Primeiro nome"
              value={formData["Primeiro nome"]}
              onChange={(e) => setFormData({ ...formData, "Primeiro nome": e.target.value })}
              className="flex-1"
            />
            <Input
              isRequired
              label="Apelido"
              name="Apelido"
              placeholder=" "
              aria-label="Apelido"
              value={formData.Apelido}
              onChange={(e) => setFormData({ ...formData, Apelido: e.target.value })}
              className="flex-1"
            />
            <Input
              isRequired
              label="Data de nascimento"
              name="Data de nascimento"
              placeholder="dd/mm/yyyy"
              aria-label="Data de nascimento"
              value={formData["Data de nascimento"]}
              onChange={(e) => setFormData({ ...formData, "Data de nascimento": e.target.value })}
              className="flex-1"
            />
          </div>
          <div className="flex gap-4 w-full mt-4">
            <Input
              isRequired
              label="Telefone"
              name="Telefone"
              placeholder="(+xxx) xxx xxx xxx"
              aria-label="Telefone"
              value={formData.Telefone}
              onChange={(e) => setFormData({ ...formData, Telefone: e.target.value })}
              className="flex-1"
            />
            <Input
              isRequired
              label="Email"
              name="Email"
              placeholder=" "
              aria-label="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="flex-1"
            />
          </div>
          <div className="flex gap-4 w-full mt-4">
            <Input
              isRequired
              label="Cartão de Cidadão"
              name="Cartão de Cidadão"
              placeholder=" "
              aria-label="CC"
              value={formData.CC}
              onChange={(e) => setFormData({ ...formData, CC: e.target.value })}
              className="flex-1"
            />
            <Input
              isRequired
              label="NIF"
              name="NIF"
              placeholder=" "
              aria-label="NIF"
              value={formData.NIF}
              onChange={(e) => setFormData({ ...formData, NIF: e.target.value })}
              className="flex-1"
            />
          </div>
          <div className="flex gap-4 w-full mt-4">
            <Input
              isRequired
              label="Morada"
              name="Morada"
              placeholder=" "
              aria-label="Morada"
              value={formData.Morada}
              onChange={(e) => setFormData({ ...formData, Morada: e.target.value })}
              className="flex-1"
            />
            <Input
              isRequired
              label="Freguesia"
              name="Freguesia"
              placeholder=" "
              aria-label="Freguesia"
              value={formData.Freguesia}
              onChange={(e) => setFormData({ ...formData, Freguesia: e.target.value })}
              className="flex-1"
            />
          </div>
          <div className="flex gap-4 w-full mt-4">
            <Input
              isRequired
              label="Cidade"
              name="Cidade"
              placeholder=" "
              aria-label="Cidade"
              value={formData.Cidade}
              onChange={(e) => setFormData({ ...formData, Cidade: e.target.value })}
              className="flex-1"
            />
            <Input
              isRequired
              label="Código postal"
              name="Código postal"
              placeholder="xxxx-xxx"
              aria-label="Código postal"
              value={formData["Código postal"]}
              onChange={(e) => setFormData({ ...formData, "Código postal": e.target.value })}
              className="flex-1"
            />
          </div>
          <Button color="secondary" type="submit" className="mt-4">
            Enviar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default FormUI;