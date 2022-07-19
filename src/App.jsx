import { Banner } from "./components/Banner";
import { Cards } from "./components/Cards";
import styles from './App.module.scss'
import { Botao } from "./components/Botao";
import { Novo } from "./components/Novo";



export function App() {
  return (
    <div className={styles.body} >
      <Banner />
      <Botao />
    </div>
  )
}
