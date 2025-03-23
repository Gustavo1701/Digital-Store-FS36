import { useContext, useState } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { Input } from '../components/Input'; // Importe o seu componente de Input
import { Button } from '../components/Button'; // Importe o seu componente de Button
import { Link, useNavigate } from 'react-router-dom';
// import loginBg from '../../public/login-bg.png'
// import loginBg2 from '../../public/login-bg-2.png'
import { AuthContext } from '../context/AuthContext';

const LoginForm = () => {
  const { setAuth } = useContext(AuthContext)
  const navigate = useNavigate()
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (login === "admin@admin.com" && senha === "123") {
      setAuth(true)
      navigate("/home")
    }
  }

  return (
    <main className='bg-gradient-to-b flex justify-center w-full h-screen from-indigo-400 via-indigo-300 to-indigo-200'>
      <div className="flex mt-32">
        <form onSubmit={handleSubmit} className="bg-white p-8 w-[583px] h-fit shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Acesse sua conta</h2>
          <p className="text-sm mb-6">
            Novo Cliente? Então registre-se{' '}
            <Link to="/register" className='underline'> aqui.</Link>
          </p>
          {/* Campo de Login */}
          <div className="mb-4">
            <Input
              id="login"
              label="Login *"
              type='email'
              value={login}
              onChange={handleLoginChange}
              placeholder="Digite seu login"
            />
          </div>
          {/* Campo de Senha */}
          <div className="mb-4">
            <Input
              id="senha"
              label="Senha *"
              type="password"
              value={senha}
              onChange={handleSenhaChange}
              placeholder="Digite sua senha"
            />
          </div>
          {/* Link para recuperar senha */}
          <div className="flex mb-6">
            <Link href="#" className="text-sm text-[var(--dark-gray)] underline">Esqueci minha senha</Link>
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
          <div className="flex justify-center gap-3 mt-4">
            <p>Ou faça login com </p>
            {/* Ícone do Gmail */}
            <a
              href="#"
              className="w-fit p-1 bg-red-500 text-white rounded-md flex items-center justify-center hover:bg-red-600 focus:outline-none"
            >
              <FaGoogle size={24} />
            </a>
            {/* Ícone do Facebook */}
            <a
              href="#"
              className="w-fit p-1 bg-blue-600 text-white rounded-md flex items-center justify-center hover:bg-blue-700 focus:outline-none"
            >
              <FaFacebook size={24} />
            </a>
          </div>
        </form>
        <div className='flex'>
          <img src="/login-bg.png" alt="" className='h-[453px] hidden md:block' />
          <img src="/login-bg-2.png" alt="" className='mt-32 h-[515px] hidden md:block' />
        </div>
      </div>
    </main>
  );
};

export default LoginForm;
