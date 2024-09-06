import Link from 'next/link';
import Image from 'next/image';
import styles from './Menu.module.css';

const Menu = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/possum.png"
            alt="Logo"
            width={200}  // Increased size
            height={200} // Increased size
            className={styles.logo}
          />
        </Link>
      
      <ul className={styles.menuList}>
        <li className={styles.menuItem}><Link href="/about-faye">About Faye</Link></li>
        <li className={styles.menuItem}><Link href="/about-me">About Me</Link></li>
        <li className={styles.menuItem}><Link href="/kap-treatment">KAP Treatment</Link></li>
        <li className={styles.menuItem}><Link href="/services">Services</Link></li>
      </ul>
      </div>
    </nav>
  );
};

export default Menu;


