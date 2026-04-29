import {
  combineReducers,
  configureStore,
  PreloadedState
} from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'

import api from '../services/api'

// export const store = configureStore({
//  reducer: {
//    carrinho: carrinhoReducer,
//    [api.reducerPath]: api.reducer
//  },
//  middleware: (getDefaultMiddleware) =>
//    getDefaultMiddleware().concat(api.middleware)
// })

export function configuraStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: {
      carrinho: carrinhoReducer,
      [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    preloadedState
  })
}

const RootReducer = combineReducers({
  carrinho: carrinhoReducer,
  [api.reducerPath]: api.reducer
})

export const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof RootReducer>
export type RootState = ReturnType<typeof RootReducer>
export type AppStore = ReturnType<typeof configuraStore>
