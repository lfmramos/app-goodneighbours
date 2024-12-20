import FormUI from "@/components/FormUI";
import React, { useState } from "react";


export default function Form() {

  type FormDataType = {
    id: string;
    firstName: string;
    lastName: string;
    birthday: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    neighbourhood: string;
    zipcode: string;
    password: string;
    nif: string;
    cc: string;
    skills: string;
  };
  const [formData, setFormData] = useState<FormDataType>({
    id: "",
    firstName: "",
    lastName: "",
    birthday: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    neighbourhood: "",
    zipcode: "",
    password: "",
    nif: "",
    cc: "",
    skills: "",
  }
  );
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Dados do formulário:", formData);
  };
  return (
    <section className="form-container container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Formulário de Cadastro</h1>
     <FormUI/>
    </section>
  );
}