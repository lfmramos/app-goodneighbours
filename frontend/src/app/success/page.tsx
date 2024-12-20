"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function SuccessPage() {
  const router = useRouter();
useEffect(() => {
  setTimeout(() => {router.push("/");}, 3000);
}, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg mx-4">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Registo concluído com sucesso!
        </h1>
        <p className="text-center text-gray-700">
          Obrigado por registar-se! Seus dados foram enviados com sucesso.
        </p>
      </div>
    </div>
  );
}

export default SuccessPage;