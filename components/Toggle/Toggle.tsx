import Image from 'next/image';
import styles from './Toggle.module.css';
import useThemeContext from '../../hooks/useThemeContext';
import { Theme } from '../../context/ThemeContext';

const Toggle = () => {
  const { toggleTheme, theme } = useThemeContext();

  return (
    <div className={styles.toggleWrapper}>
      <Image
        onClick={toggleTheme}
        /* loader={myLoader} */ src={theme === Theme.dark ? '/icons8-sun.svg' : '/moon-and-stars-svgrepo-com.svg'}
        className={styles.icon}
        alt="Light and black theme toggle"
        width={40}
        height={40}
        layout="responsive"
      />
    </div>
  );
};

export default Toggle;
