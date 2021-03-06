import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './Header.module.scss';

const Header = () => {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', { locale: ptBR });

  return (
    <header className={styles.header}>
      <img src="/logo.svg" alt="Logo Podcastr" />
      <p>O melhor para você ouvir, sempre</p>
      <span>{currentDate}</span>
    </header>
  );
};

export { Header };
