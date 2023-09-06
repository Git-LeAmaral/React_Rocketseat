/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment({ content, onDeleteComment }) {

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
        <Avatar hasBorder={false} src="http://github.com/cassiotsantos.png" />

        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Cassio Santos</strong>
                <time title="19 de Agosto às 09:39h" dateTime="2023-08-19 09:39:45">Cerca de 1h atrás</time>
              </div>

              <button onClick={handleDeleteComment} title="Deletar comentário">
                <Trash size={24}/>
              </button>
            </header>

            <p>{content}</p>
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