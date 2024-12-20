
import Link from "next/link";
import React from "react";
export default function FormHelp() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-blue-50 flex items-center justify-center p-6">
      {/* Container do formulário */}
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-3xl w-full">
        {/* Cabeçalho */}
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-4">
          Para qual área precisa de ajuda?
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Escolha uma área de preferência.
        </p>
        {/* Opções de áreas */}
        <div className="grid grid-cols-3 gap-4">
          {[
            "Cozinhar",
            "Limpeza",
            "Apoio a Idosos",
            "Jardinagem",
            "Compras",
            "Companhia",
            "Transporte",
            "Cuidado de animais",
            "Manutenção",
          ].map((area) => (
            <button
              key={area}
              className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:scale-105 transform transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              {area}
            </button>
          ))}
        </div>
        {/* Navegação */}
        <div className="flex justify-between mt-8">
          <Link href="/" className="bg-purple-300 text-gray-700 font-medium py-2 px-6 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400">
          <button className="bg-purple-300 text-gray-700 font-medium py-2 px-6 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400">
             Anterior
          </button>
          </Link>
          <Link href="/Profile" className="bg-purple-500 text-gray-700 font-medium py-2 px-6 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400">
          <button className="bg-purple-500 text-white font-medium py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
            Próximo
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}











