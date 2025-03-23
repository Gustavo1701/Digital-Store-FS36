import PrivateRoutes from './routes/PrivateRoutes'; // Não precisa usar chaves, pois é a exportação padrão
import PublicRoutes from './routes/PublicRoutes'; // Não precisa usar chaves, pois é a exportação padrão
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';

function App() {
  const { auth } = useContext(AuthContext);

  return (
    // Não precisa de <Routes> aqui
    <>
      {/* Condicionalmente renderiza rotas privadas ou públicas */}
      {auth ? (
        <PrivateRoutes />  // Renderiza as rotas privadas
      ) : (
        <PublicRoutes />  // Renderiza as rotas públicas
      )}
    </>
  );
}

export default App;
