import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Section } from "../components/Section";

export const CreateAccountPage = () => {
  return (<>
    <main className="px-[30vw] bg-[var(--light-gray-3)] py-10 flex-1">
      <h1 className="text-3xl font-bold">Criar Conta</h1>

      <Section
        title={"Informações Pessoais"}
        titleSize="text-lg"
        className={" bg-white w-full px-4 py-5"}
      >
        <div className="border border-solid border-gray-300"></div>
        <Input type="text" labelSize="text-xs font-bold" id={"nome"} label={"Nome Completo *"}  placeholder={"Insira seu nome"}/>
        <Input type="number" labelSize="text-xs font-bold" id={"cpf"} label={"CPF *"} placeholder={"Insira seu CPF"} />
        <Input type="email" labelSize="text-xs font-bold" id={"email"} label={"Email *"} placeholder={"Insira seu email"}/>
        <Input type="tel" labelSize="text-xs font-bold" id={"celular"} label={"Celular *"} placeholder={"Insira seu celular"}/>
      </Section>

      <Section
        title={"Informações de Entrega"}
        titleSize="text-lg"
        className={" bg-white w-full px-4 py-5"}
      >
        <div className="border border-solid border-gray-300"></div>
        <Input type="text" labelSize="text-xs font-bold" id={"endereco"} label={"Endereço *"} placeholder={"Insira seu endereco"}/>
        <Input type="texte" labelSize="text-xs font-bold" id={"bairro"} label={"Bairro *"} placeholder={"Insira seu bairro"} />
        <Input type="text" labelSize="text-xs font-bold" id={"cidade"} label={"Cidade *"} placeholder={"Insira sua cidade"}/>
        <Input type="number" labelSize="text-xs font-bold" id={"cep"} label={"CEP *"} placeholder={"Insira seu cep"}/>
        <Input type="text" labelSize="text-xs font-bold" id={"complemento"} label={"Complemento *"} placeholder={"Insira complemento"}/>
      </Section>

      <div className="flex mt-2">
        <span><input className="w-5 h-5 mr-2 align-middle" type="checkbox" name="accept" id="accept" /></span>
        <label htmlFor="accept">Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.</label>
      </div>

      <Button label={"Criar Conta"} labelColor={"white w-full mt-2"} color={"[var(--primary)]"}/>
    </main>
    </>
    );
};
