import styles from './Botao.module.scss'

export function Botao() {


  function handlePressButton() {
    this.setAttribute("aria-checked", "true")
  }
  return (
    <div className={styles.container} >
      <button className={styles.button} role="switch" aria-checked="false"
        onClick={handlePressButton}>
        <span></span>
      </button>
    </div>
  )
}
