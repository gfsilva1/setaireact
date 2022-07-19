import styles from './Novo.module.scss'
import { Botao } from './Botao'
import { useState } from 'react';

export function Novo() {
  const [areas, setAreas] = useState([
    1,
    2,
    3,
  ])


  function handleCreateBotao() {
    setAreas([...areas, areas.length + 1])
  }
  return (
    <div onClick={handleCreateBotao}>
      {areas.map(tamanho => {
        return <Botao />
      })}
      whatsss
    </div>
  )
}
