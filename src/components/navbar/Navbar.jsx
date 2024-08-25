import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <img src="/assets/logo.svg" alt="logo" />
        <span>Home</span>
      </div>
      <div>
        <img src="/assets/avatar.svg" alt="avatar" />
      </div>
    </nav>
  );
};

export default Navbar;
