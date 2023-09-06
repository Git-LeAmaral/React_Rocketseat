/* eslint-disable react/jsx-key */
import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/LuisBraga31.png',
      name: 'Luiz Braga',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },

      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },

      { type: 'link', content: '👉 Luiz.design/doctorcare' },
    ],
    publishedAt: new Date('2023-08-17 9:35:12')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/Git-LeAmaral.png',
      name: 'Leandro Amaral',
      role: 'Full stack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },

      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },

      { type: 'link', content: '👉 Leandro.design/doctorcare' },
    ],
    publishedAt: new Date('2023-08-19 15:55:12')
  },
];

export function App() {
  return (
    <div>
        <Header />

        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            {posts.map(post => {
                return (
                <Post  
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
                )
            })}
          </main>
        </div>
    </div>
  ) 
}



