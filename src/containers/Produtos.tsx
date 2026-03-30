import Produto from '../components/Produto'
import { useGetJogosQuery } from '../services/api'
import * as S from './styles'

const Produtos = () => {
  const { data: games, isLoading } = useGetJogosQuery()

  if (isLoading) {
    return <div>Carregando...</div>
  }
  return (
    <>
      <S.Produtos>
        {games?.map((game) => (
          <Produto key={game.id} game={game} />
        ))}
      </S.Produtos>
    </>
  )
}

export default Produtos
