import { useContext } from 'react'
import './App.css'
import { PrivateRoutes } from './routes/PrivateRoutes'
import { AuthContext } from './context/AuthContext'
import { PublicRoutes } from './routes/PublicRoutes'



function App() {
  const {auth} = useContext(AuthContext)
  console.log(auth);
  return (
    
     auth ? <PrivateRoutes/> : <PublicRoutes/>
    
  )
}

export default App
