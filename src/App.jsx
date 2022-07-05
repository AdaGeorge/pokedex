import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import SignUp from './components/login/SignUp'
import PokedexHome from './components/pokedex/PokedexHome'
import PokedexInfo from './components/PokedexInfo'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
  
  const nameUser = useSelector(state=> state.nameUser)

  return (
    <div className="App">
      <Routes>

        <Route path='/' element={<SignUp/>}/>

        <Route element={<ProtectedRoutes isLogged={nameUser}/>}>
        <Route path='/pokedex' element={<PokedexHome/>}/>
        <Route path='/pokedex/:id' element={<PokedexInfo/>}/>
        </Route>

      </Routes>
    </div>
  )
}

export default App
