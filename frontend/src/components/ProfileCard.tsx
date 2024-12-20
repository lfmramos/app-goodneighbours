import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
export default function App() {
  const [data, setData] = React.useState([
    {
      name: "João Silva",
      city: "Lisboa",
      skills: "Compras, Limpeza",
      src: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },
    {
      name: "Maria Santos",
      city: "Porto",
      skills: "Cozinhar, Compras",
      src: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
    },
    {
      name: "Carlos Pereira",
      city: "Coimbra",
      skills: "Compras, Transporte",
      src: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
    },
  {
    name: "Carlos Pereira",
    city: "Coimbra",
    skills: "Compras, Informática",
    src: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
  },
]);
  return (
    <div className="flex justify-center gap-6 flex-wrap"> {/* Aumentando o gap e adicionando flex-wrap para responsividade */}
      {data.map((item, index) => (
        <Card key={index} className="max-w-[300px] w-full">
          <CardHeader className="flex items-center gap-3">
            <Avatar
              isBordered
              color="primary"
              name={item.name}
              size="lg"
              src={item.src}
            />
          </CardHeader>
          <CardBody className="px-3 py-0 text-small text-default-400">
            <section> 
            <h4 className="text-lg font-bold">{item.name}</h4>
            <span className="pt-2">
              Cidade: {item.city}<br />
              Skills: {item.skills}<br />
            </span>
            </section>
          </CardBody>
          <CardFooter className="gap-3">
            <Button radius="full" size="sm" variant="bordered">
              Solicitar Ajuda
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}