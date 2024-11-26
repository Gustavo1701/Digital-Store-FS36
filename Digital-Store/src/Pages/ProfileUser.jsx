import { useState } from "react";
import { Section } from "../components/Section";
import { Input } from "../components/Input";

export const ProfileUser = () => {
  const personOptions = ["Nome:", "CPF:", "Email:", "Celular:"];
  const adressOptions = ["Endereço:", "Cidade:", "Bairro:", "CEP:"];
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    nome: "FS36",
    cpf: "636536936-36",
    email: "fs36@gmail.com",
    celular: "85986369636",
    endereco: "Rua 36",
    cidade: "Fortaleza",
    bairro: "Aldeota",
    cep: "60936-36",
  });

  const handleInputChange = (event, field) => {
    const value = event.target.value;
    setUserData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Section className="h-fit container py-8 px-8 bg-white border w-[890px]">
      <header className="flex justify-between mb-2">
        <h2 className="text-base text-[var(--dark-gray-2)] font-bold">
          Minhas informações
        </h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-[var(--primary)] underline font-semibold"
        >
          {isEditing ? "Salvar" : "Editar"}
        </button>
      </header>
      <div className="my-3 w-full border border-[var(--light-gray-2)]"></div>
      {/* Informações Pessoais */}
      <Section title={"Informações Pessoais"}>
        <ul className="mt-[-12px] space-y-2">
          {personOptions.map((label, index) => {
            const field = ["nome", "cpf", "email", "celular"][index]; // Campos pessoais
            return (
              <li key={index} className="flex items-center gap-1">
                <span className="text-[var(--light-gray)]">{label}</span>
                {isEditing ? (
                  <Input
                    height="h-8"
                    className="border border-gray-300 px-2 py-1 rounded"
                    value={userData[field]}
                    onChange={(event) => handleInputChange(event, field)}
                  />
                ) : (
                  <p>{userData[field]}</p>
                )}
              </li>
            );
          })}
        </ul>
      </Section>
      <div className="my-3 w-full border border-[var(--light-gray-2)]"></div>
      {/* Informações de Entrega */}
      <Section title={"Informações de Entrega"}>
        <ul className="mt-[-12px] space-y-2">
        {personOptions.map((label, index) => {
            const field = ["endereco", "cidade", "bairro", "cep"][index]; // Campos pessoais
            return (
              <li key={index} className="flex items-center gap-1">
                <span className="text-[var(--light-gray)]">{label}</span>
                {isEditing ? (
                  <Input
                    height="h-8"
                    className="border border-gray-300 px-2 py-1 rounded"
                    value={userData[field]}
                    onChange={(event) => handleInputChange(event, field)}
                  />
                ) : (
                  <p>{userData[field]}</p>
                )}
              </li>
            );
          })}
        </ul>
      </Section>
    </Section>
  );
};
