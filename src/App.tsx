import Header from './components/Header'
import Produtos from './containers/Produtos'
import { Provider } from 'react-redux'
import store from './store'

import { GlobalStyle } from './styles'
import { useGetJogosQuery } from './services/api'

export type Game = {
  id: number
  titulo: string
  plataformas: string[]
  precoAntigo: number
  preco: number
  categoria: string
  imagem: string
}

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos />
      </div>
    </Provider>
  )
}

export default App
