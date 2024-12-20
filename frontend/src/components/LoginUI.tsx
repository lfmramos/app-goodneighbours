import React from "react";
import {Form} from "@nextui-org/form";
import {Input} from "@nextui-org/input";
import {Button/*, ButtonGroup*/} from "@nextui-org/button";

export default function LoginUI() {
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
          validationBehavior="native"
          onReset={() => setAction("reset")}
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const data = Object.fromEntries(new FormData(e.currentTarget));
            setAction(`submit ${JSON.stringify(data)}`);
          }}
        >
          {/* Inputs */}
          <Input
            isRequired
            errorMessage=""
            label="ID"
            labelPlacement="outside"
            name="ID"
            placeholder="Digite o ID"
            type="text"
          />
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
            errorMessage="Entre com uma data válida"
            label="Data de nascimento"
            labelPlacement="outside"
            name="Data de nascimento"
            placeholder="Entre com a data de nascimento"
            type="date"
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

          {/* Botões */}
          <div className="flex gap-4 justify-center mt-4">
            <Button color="secondary" type="submit">
              Enviar
            </Button>
            <Button color="secondary" type="reset" variant="flat">
              Resetar
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