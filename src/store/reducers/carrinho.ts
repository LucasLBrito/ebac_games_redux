import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../App'

//tipagem do estado
type CarrinhoState = {
  itens: Game[]
}

//estado inicial
const initialState: CarrinhoState = {
  itens: []
}

//slice com os reducers
const CarrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Game>) => {
      const jogo = action.payload
      //verificar se o jogo já está no carrinho
      if (state.itens.find((game) => game.id === jogo.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(jogo)
      }
    }
  }
})

export const { adicionarAoCarrinho } = CarrinhoSlice.actions
export default CarrinhoSlice.reducer
