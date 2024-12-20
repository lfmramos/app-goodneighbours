import Link from "next/link";
import Card from "./Card";
import React from "react";
const CardsSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
    <Link href="/../Form" className="cursor-pointer">
      <Card title="QUERO SER VOLUNTÁRIO" bgColor="bg-pink-300"  />
    </Link>
    <Link href="/../FormHelp" className="cursor-pointer">
      <Card title="QUERO AJUDA" bgColor="bg-purple-300" content={""} />
    </Link>
    <Link href="/../InstForm" className="cursor-pointer">
      <Card title="SOU UMA INSTITUIÇÃO" bgColor="bg-indigo-300" content={""} />
    </Link>
    </section>
  );
};
export default CardsSection;