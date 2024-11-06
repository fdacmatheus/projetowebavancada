"use client";

import { useRouter } from 'next/navigation';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Remova o token de autenticação ou qualquer informação de sessão armazenada
    localStorage.removeItem('authToken'); // Exemplo: se o token estiver no localStorage
    sessionStorage.removeItem('authToken'); // Se o token estiver no sessionStorage

    // Redirecionar para a página de login
    router.push('/');
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.userProfile}>
        <img src="/path/to/user-image.jpg" alt="User" className={styles.userImage} />
        <h3>Marcos Paulo</h3>
        <p>Pai do aluno</p>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.navItem}>
            <a href="#" className={styles.active}>Tickets</a>
          </li>
          <li className={styles.navItem}>
            <a href="#" onClick={handleLogout}>Sair</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
