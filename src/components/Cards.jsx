import styles from './Cards.module.scss'
import projeto from '../assets/projeto.png'
import instalacao from '../assets/instalacao.png'
import manutencao from '../assets/manutencao.png'


export function Cards() {
  return (
    <div >
      <div className={styles.containerini}>
        <div className={styles.cardform}>
          <div className={styles.containerhome}>
            <div className={styles.card}>
              <div className={styles.face}>
                <div className={styles.face1} >
                  <div className={styles.content}>
                    <div className={styles.textcenter}>
                        <img src={projeto} width="120" height="100" />
                    </div>
                    <a>Projetos de ar condicionado</a>
                  </div>
                </div>
                <div className={styles.face2} >
                    <div className={styles.content}>
                      <a href="#">Soluções específicas</a>
                    </div>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.face}>
                <div className={styles.face1} >
                  <div className={styles.content}>
                    <div className={styles.textcenter}>
                      <img src={instalacao} width="120" height="100" />
                    </div>
                    <a>Instalação de Sistemas e Comissionamento</a>
                  </div>
                </div>
                <div className={styles.face2} >
                  <div className={styles.content}>
                    <a href="#">VRF, VAV, ETC</a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.face}>
                <div className={styles.face1} >
                  <div className={styles.content}>
                    <div className={styles.textcenter}>
                      <img src={manutencao} width="120" height="100" />
                    </div>
                    <a>Manutenção e suporte em campo</a>
                  </div>
                </div>
                <div className={styles.face2} >
                  <div className={styles.content}>
                    <a href="#">Garantia de sistema operante</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
