import styles from "./AppMenu.module.css";

const AppMenu = () => {
  return (
    <div className={styles.app_menu}>
      <a className={styles.item} href="/">
        <img src="/assets/home.svg" alt="home icon" />
        <span className={styles.active}>Home</span>
      </a>
      <a className={styles.item} href="/">
        <img src="/assets/message.svg" alt="message icon" />
        <span>Messages</span>
      </a>
      <a className={styles.item} href="/">
        <img src="/assets/create.svg" alt="newpost icon" />
        <span>Create</span>
      </a>
      <a className={styles.item} href="/">
        <img src="/assets/profile.svg" alt="profile icon" />
        <span>Create</span>
      </a>
    </div>
  );
};

export default AppMenu;
