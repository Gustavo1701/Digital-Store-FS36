import { useContext } from 'react'
import './App.css'
import { PrivateRoutes } from './routes/PrivateRoutes'
import { AuthContext } from './context/AuthContext'
import { PublicRoutes } from './routes/PublicRoutes'
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  const {auth} = useContext(AuthContext)
  console.log(auth);
  return (
    
     <Router>
      {auth ? <PrivateRoutes/> : <PublicRoutes/>}
    </Router>
    
  )
}

export default App
