import { screen, fireEvent } from '@testing-library/react'
import Produto from '..'
import { renderizaComProvider } from '../../../utils/teste'

describe('Teste Produto', () => {
  test('Deve renderizar o produto corretamente', () => {
    const jogoMock = {
      id: 1,
      nome: 'Cyberpunk',
      titulo: 'Cyberpunk',
      plataformas: ['PC', 'PlayStation 5', 'Xbox Series X'],
      precoAntigo: 299.9,
      categoria: 'RPG',
      preco: 199.9,
      imagem: 'a'
    }
    renderizaComProvider(<Produto game={jogoMock} />)
  })

  test('Deve deve adicionar o jogo ao carrinho', () => {
    const jogoMock = {
      id: 1,
      nome: 'Cyberpunk',
      titulo: 'Cyberpunk',
      plataformas: ['PC', 'PlayStation 5', 'Xbox Series X'],
      precoAntigo: 299.9,
      categoria: 'RPG',
      preco: 199.9,
      imagem: 'a'
    }
    const { store } = renderizaComProvider(<Produto game={jogoMock} />)
    const btnAdicionar = screen.getByTestId('btn-adicionar')
    fireEvent.click(btnAdicionar)

    expect(store.getState().carrinho.itens).toHaveLength(1)
  })
})
