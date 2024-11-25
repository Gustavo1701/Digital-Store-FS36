import React, { useState } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { Input } from '../components/Input'; // Importe o seu componente de Input
import { Button } from '../components/Button'; // Importe o seu componente de Button
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 w-[583px] h-[560px] rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Acesse sua conta</h2>
        <p className="text-sm text-center mb-6">
          Novo Cliente? Então registre-se{' '}
          <Link to="/register" className="text-blue-500"> aqui</Link>
        </p>

        {/* Campo de Login */}
        <div className="mb-4">
          <Input 
            id="login" 
            label="Login" 
            value={login} 
            onChange={handleLoginChange} 
            placeholder="Digite seu login"
          />
        </div>

        {/* Campo de Senha */}
        <div className="mb-4">
          <Input 
            id="senha" 
            label="Senha" 
            type="password" 
            value={senha} 
            onChange={handleSenhaChange} 
            placeholder="Digite sua senha"
          />
        </div>

        {/* Link para recuperar senha */}
        <div className="flex justify-end mb-6">
          <a href="#" className="text-sm text-blue-500">Esqueci minha senha</a>
        </div>

        {/* Botão de Acessar Conta */}
        <Button 
          label="Acessar conta" 
          labelColor="white" 
          color="[var(--primary)]" 
          type="submit"
          className="mb-4 w-full"

        />

        {/* Seção de Login com ícones do Gmail e Facebook */}
        <div className="flex justify-between mt-4">
          {/* Ícone do Gmail */}
          <a
            href="#"
            className="w-[48%] p-3 bg-red-500 text-white rounded-md flex items-center justify-center hover:bg-red-600 focus:outline-none"
          >
            <FaGoogle size={24} />
          </a>

          {/* Ícone do Facebook */}
          <a
            href="#"
            className="w-[48%] p-3 bg-blue-600 text-white rounded-md flex items-center justify-center hover:bg-blue-700 focus:outline-none"
          >
            <FaFacebook size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
