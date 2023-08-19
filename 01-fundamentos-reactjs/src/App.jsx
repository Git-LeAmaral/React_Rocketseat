import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
        <Header />

        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            <Post 
              author="Leandro Amaral" 
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus iure porro accusamus enim, nam vitae dolor animi, ea repudiandae officiis! Alias ipsam et perspiciatis recusandae neque dicta officiis itaque" 
            />

            <Post
              author="Michelle Amaral"
              content="Um novo post legal"
            />
          </main>
        </div>
    </div>
  ) 
}



