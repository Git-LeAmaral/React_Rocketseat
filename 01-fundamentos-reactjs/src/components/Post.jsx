import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <img className={styles.avatar} src="http://github.com/LuisBraga31.png" />
                <div className={styles.authorInfo}>
                    <strong>Luiz Braga</strong>
                    <span>Web Developer</span>
                </div>
            </div>

            <time title="19 de Agosto às 09:39h" dateTime="2023-08-19 09:39:45">Publicado há 1h</time>
        </header>

        <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉{' '}<a href="">Luiz.design/doctorcare</a></p>

                <p>
                  <a href="">#novoprojeto</a>{' '} 
                  <a href="">#nlw</a>{' '} 
                  <a href="">#rocketseat</a>
                </p>
        </div>

        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea 
            placeholder="Deixe um comentário"
          />

          <footer>
            <button type="submit">Publicar</button>
          </footer>
        </form>
    </article>
  );
}