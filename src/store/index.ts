import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinho'

const store = configureStore({
  //combinando os reducers
  reducer: {
    //nome do reducer no estado global
    carrinho: carrinhoReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export default store
