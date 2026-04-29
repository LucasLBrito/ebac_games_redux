import Header from '../index'
import { renderizaComProvider } from '../../../utils/teste'
import { screen } from '@testing-library/react'

describe('Testando Header', () => {
  test('deve renderizar o header corretamente', () => {
    renderizaComProvider(<Header />)
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })

  test('Deve renderizar com 2 itens no carrinho', () => {
    renderizaComProvider(<Header />, {
      preloadedState: {
        carrinho: {
          itens: [
            {
              id: 1,
              titulo: 'teste',
              plataformas: ['teste'],
              precoAntigo: 1,
              preco: 1,
              categoria: 'teste',
              imagem: 'teste'
            },
            {
              id: 2,
              titulo: 'teste',
              plataformas: ['teste'],
              precoAntigo: 1,
              preco: 1,
              categoria: 'teste',
              imagem: 'teste'
            }
          ]
        }
      }
    })
    expect(screen.getByTestId('total-itens').innerHTML).toBe('2 itens')
  })
})
