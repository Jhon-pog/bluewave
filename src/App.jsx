//import './App.css'
import HomeFuncionario from './pages/HomeFuncionario/HomeFuncionario'
import Multiroes from './pages/Multiroes/multiroes'
import Recife from './pages/Recife/recife'
import { Blue } from './components/Blue/Blue'
import { Combate } from './components/Combate/Combate'
import Menu from './pages/Menu/menu'

function App() {


  return (
    <>
      <div>
        <Blue/>
        <Combate/>
        <Menu/>
        <Multiroes/>
        <Recife/>
      </div>
    </>
  ) 
}  

export default App
