import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Section } from "../components/Section";

export const CreateAccountPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    email: "",
    password: "",
    tel: "",
    adrress: "",
    neighborhood: "",
    city: "",
    cep: "",
    complement: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do formulário", formData);
        setFormData({
      name: "",
      cpf: "",
      email: "",
      password: "",
      tel: "",
      adrress: "",
      neighborhood: "",
      city: "",
      cep: "",
      complement: "",
    });
  };

  return (
    <>
      <main className="px-[30vw] bg-[var(--light-gray-3)] py-10 flex-1">
        <h1 className="text-3xl font-bold">Criar Conta</h1>

        <form onSubmit={handleSubmit}>
          <Section
            title={"Informações Pessoais"}
            titleSize="text-lg"
            className={" bg-white w-full px-4 py-2 mt-5"}
          >
            <div className="border border-solid my-5 border-gray-300"></div>
            <Input
              type="text"
              labelSize="text-xs font-bold"
              id={"name"}
              name={"name"}
              label={"Nome Completo *"}
              placeholder={"Insira seu nome"}
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              type="number"
              labelSize="text-xs font-bold"
              id={"cpf"}
              name={"cpf"}
              label={"CPF *"}
              placeholder={"Insira seu CPF"}
              value={formData.cpf}
              onChange={handleChange}
            />
            <Input
              type="email"
              labelSize="text-xs font-bold"
              id={"email"}
              name={"email"}
              label={"Email *"}
              placeholder={"Insira seu email"}
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              type="password"
              labelSize="text-xs font-bold"
              id={"password"}
              name={"password"}
              label={"Senha *"}
              placeholder={"Insira sua senha"}
              value={formData.password}
              onChange={handleChange}
            />
            <Input
              type="tel"
              labelSize="text-xs font-bold"
              id={"Celular"}
              name={"tel"}
              label={"Celular *"}
              placeholder={"Insira seu celular"}
              value={formData.tel}
              onChange={handleChange}
            />
          </Section>
          <Section
            title={"Informações de Entrega"}
            titleSize="text-lg"
            className={" bg-white w-full px-4 py-4"}
          >
            <div className="border border-solid my-5 border-gray-300"></div>
            <Input
              type="text"
              labelSize="text-xs font-bold"
              id={"adrress"}
              name={"adrress"}
              label={"Endereço *"}
              placeholder={"Insira seu endereco"}
              value={formData.adrress}
              onChange={handleChange}
            />
            <Input
              type="texte"
              labelSize="text-xs font-bold"
              id={"neighborhood"}
              name={"neighborhood"}
              label={"Bairro *"}
              placeholder={"Insira seu bairro"}
              value={formData.neighborhood}
              onChange={handleChange}
            />
            <Input
              type="text"
              labelSize="text-xs font-bold"
              id={"city"}
              name={"city"}
              label={"Cidade *"}
              placeholder={"Insira sua cidade"}
              value={formData.city}
              onChange={handleChange}
            />
            <Input
              type="number"
              labelSize="text-xs font-bold"
              id={"cep"}
              name={"cep"}
              label={"CEP *"}
              placeholder={"Insira seu cep"}
              value={formData.cep}
              onChange={handleChange}
            />
            <Input
              type="text"
              labelSize="text-xs font-bold"
              id={"complement"}
              name={"complement"}
              label={"Complemento *"}
              placeholder={"Insira complemento"}
              value={formData.complement}
              onChange={handleChange}
            />
          </Section>
          <div className="flex mt-2">
            <span>
              <input
                className="w-5 h-5 mr-2 align-middle focus:ring-0 text-[var(--primary)]"
                type="checkbox"
                name="accept"
                id="accept"
              />
            </span>
            <label htmlFor="accept">
              Quero receber por email ofertas e novidades das lojas da Digital
              Store. A frequência de envios pode variar de acordo com a
              interação do cliente.
            </label>
          </div>
          <Button
            type={"submit"}
            label={"Criar Conta"}
            labelColor={"white w-full mt-2"}
            color={"[var(--primary)]"}
          />
        </form>
      </main>
    </>
  );
};
