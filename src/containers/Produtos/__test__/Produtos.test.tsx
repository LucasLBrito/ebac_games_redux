//importacoes  de dependencia
import { describe, test } from '@jest/globals'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { screen, waitFor } from '@testing-library/react'
//importacaoes de arquivos locais
import Produtos from '..'
import { renderizaComProvider } from '../../../utils/teste'

const mocks = [
  {
    id: 1,
    titulo: 'Cyberpunk 2077',
    plataformas: ['PC', 'PlayStation 5', 'Xbox Series X'],
    precoAntigo: 299.9,
    preco: 199.9,
    categoria: 'RPG',
    imagem: 'https://exemplo.com/cyberpunk.jpg'
  },
  {
    id: 2,
    titulo: 'The Legend of Zelda',
    plataformas: ['Nintendo Switch'],
    precoAntigo: 350.0,
    preco: 299.9,
    categoria: 'Aventura',
    imagem: 'https://exemplo.com/zelda.jpg'
  },
  {
    id: 3,
    titulo: 'God of War Ragnarök',
    plataformas: ['PlayStation 4', 'PlayStation 5'],
    precoAntigo: 349.9,
    preco: 249.9,
    categoria: 'Ação',
    imagem: 'https://exemplo.com/gow.jpg'
  },
  {
    id: 4,
    titulo: 'Elden Ring',
    plataformas: ['PC', 'PlayStation 5', 'Xbox Series X'],
    precoAntigo: 299.9,
    preco: 229.9,
    categoria: 'RPG',
    imagem: 'https://exemplo.com/eldenring.jpg'
  }
]

const server = setupServer(
  rest.get(
    'http://localhost:4000/produtos',
    (requisicao, resposta, contexto) => {
      return resposta(contexto.json(mocks))
    }
  )
)

describe('Testando Produtos', () => {
  beforeAll(() => {
    server.listen()
  })

  afterEach(() => {
    server.resetHandlers()
  })

  afterAll(() => {
    server.close()
  })
  test('deve renderizar os produtos corretamente o texto de carregando', () => {
    renderizaComProvider(<Produtos />)
    expect(screen.getByText('Carregando...')).toBeInTheDocument()
  })
  test('deve renderizar os produtos corretamente os titulos dos jogos', async () => {
    renderizaComProvider(<Produtos />)
    await waitFor(() =>
      expect(screen.getByText('Cyberpunk 2077')).toBeInTheDocument()
    )
    await waitFor(() =>
      expect(screen.getByText('The Legend of Zelda')).toBeInTheDocument()
    )
    await waitFor(() =>
      expect(screen.getByText('God of War Ragnarök')).toBeInTheDocument()
    )
    await waitFor(() =>
      expect(screen.getByText('Elden Ring')).toBeInTheDocument()
    )
  })
})
