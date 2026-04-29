import { PreloadedState } from '@reduxjs/toolkit'
import { PropsWithChildren } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configuraStore, RootState, AppStore } from '../store'

import React from 'react'

/**
 * Interface que estende as opções de renderização padrão do Testing Library.
 * Ela permite passarmos um estado inicial pré-carregado (`preloadedState`)
 * ou até mesmo uma `store` inteira customizada na hora de renderizar os testes.
 */
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

/**
 * Função utilitária para renderizar componentes que dependem do Redux.
 * Ela cria um ambiente (wrapper) simulando o app real para que os testes funcionem corretamente.
 *
 * @param elemento - O componente React que queremos testar (ex: <Header />).
 * @param opcoes - Configurações extras, estado inicial simulado e a store do Redux.
 */
export function renderizaComProvider(
  elemento: React.ReactElement,
  {
    // Estado inicial padrão vazio, se não for passado nenhum
    preloadedState = {},
    // Se não passarmos uma store customizada, ele cria uma nova store com o estado pré-carregado
    store = configuraStore(preloadedState),
    // Outras opções repassadas para a função render do Testing Library
    ...opcoesAdicionais
  }: ExtendedRenderOptions = {}
) {
  /**
   * Componente que envolve (encapsula) nosso elemento de teste
   * com o Provider do Redux, injetando a store para que os hooks
   * (useSelector, useDispatch) funcionem.
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  function Encapsulador({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }

  // Retorna a store para podermos interagir com ela no teste, além
  // das funções padrão de renderização do Testing Library (como screen, getByText, etc)
  return {
    store,
    ...render(elemento, { wrapper: Encapsulador, ...opcoesAdicionais })
  }
}
