import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
        <img src="http://github.com/cassiotsantos.png" />

        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Cassio Santos</strong>
                <time title="19 de Agosto às 09:39h" dateTime="2023-08-19 09:39:45">Cerca de 1h atrás</time>
              </div>

              <button title="Deletar comentário">
                <Trash size={24}/>
              </button>
            </header>

            <p>Muito bom migo, parabéns!! 👏🏿👏🏿</p>
          </div>

          <footer>
            <button>
                <ThumbsUp />
                Aplaudir <span>20</span>
            </button>
          </footer>
        </div>

    </div>
  )
}