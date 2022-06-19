import {
  Shuffle,
  Play,
  SkipForward,
  SkipBack,
  Pause,
  Repeat,
} from 'phosphor-react';

import styles from './Player.module.scss';

const Player = () => {
  return (
    <div className={styles.player}>
      <header>
        <img src="/headphone.svg" alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </header>
      <div className={styles.emptyPlayer}>
        <strong>Selecione um podcast para ouvir</strong>
      </div>

      <footer className={styles.empty}>
        <div className={styles.progress}>
          <span>00:00</span>
          <div className={styles.slider}>
            <div className={styles.emptySlider}></div>
          </div>
          <span>00:00</span>
        </div>

        <div className={styles.buttons}>
          <button type="button">
            <Shuffle size={24} weight="fill" />
          </button>
          <button type="button">
            <SkipBack size={24} weight="fill" />
          </button>
          <button type="button" className={styles.playButton}>
            <Play size={24} weight="fill" />
          </button>
          <button type="button">
            <SkipForward size={24} weight="fill" />
          </button>
          <button type="button">
            <Repeat size={24} weight="fill" />
          </button>
        </div>
      </footer>
    </div>
  );
};

export { Player };
