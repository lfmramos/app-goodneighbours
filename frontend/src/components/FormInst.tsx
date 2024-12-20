"use client";
import React from "react";
import { Form, Input, Button } from "@nextui-org/react";
export default function FormInst() {
  const [action, setAction] = React.useState<string | null>(null);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      {/* Container do formulário */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg mx-4">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Formulário
        </h1>
        <Form
          className="flex flex-col gap-4"
          aria-label="Formulário de Cadastro"
          onReset={() => setAction("reset")}
          onSubmit={(e) => {
            e.preventDefault();
            const formData = Object.fromEntries(new FormData(e.currentTarget));
            setAction(`Dados enviados: ${JSON.stringify(formData)}`);
          }}
        >
          {/* Inputs */}
          <Input
            isRequired
            label="Entidade"
            name="Entidade"
            placeholder="Entidade"
            aria-label="Entidade"
          />
          <Input
            isRequired
            label="NIF"
            name="Nif"
            placeholder="Nif"
            aria-label="Nif"
          />
          <Input
            isRequired
            label="Primeiro Nome"
            name="primeiroNome"
            placeholder="Digite o primeiro nome"
            aria-label="Digite o primeiro nome"
          />
          <Input
            isRequired
            label="Apelido"
            name="apelido"
            placeholder="Digite o apelido"
            aria-label="Digite o apelido"
          />
          <Input
            isRequired
            label="Data de Nascimento"
            name="dataNascimento"
            type="date"
            aria-label="Digite a data de nascimento"
          />
          <Input
            isRequired
            label="Email"
            name="email"
            type="email"
            placeholder="Digite o email"
            aria-label="Digite o email"
          />
          <Input
            isRequired
            label="Telefone"
            name="telefone"
            type="tel"
            placeholder="Digite o telefone"
            aria-label="Digite o telefone"
          />
          <Input
            isRequired
            label="Morada"
            name="morada"
            placeholder="Digite a morada"
            aria-label="Digite a morada"
          />
          <Input
            isRequired
            label="Código Postal"
            name="codigoPostal"
            placeholder="Digite o código postal"
            aria-label="Digite o código postal"
          />
          {/* Botões */}
          <div className="flex gap-4 justify-center mt-4">
            <Button color="secondary" type="submit">
              Enviar
            </Button>
            <Button color="secondary" type="reset">
              Limpar Campos
            </Button>
          </div>
        </Form>
        {/* Feedback de ação */}
        {action && (
          <div className="text-sm text-gray-500 mt-4 text-center">
            <strong>Ação:</strong> <code>{action}</code>
          </div>
        )}
      </div>
    </div>
  );
}
