import styles from "./AppMenu.module.css";

const AppMenu = () => {
  return (
    <div className={styles.app_menu}>
      <div className={styles.item}>
        <img src="/assets/home.svg" alt="home icon" />
        <p className={styles.active}>Home</p>
      </div>
      <div className={styles.item}>
        <img src="/assets/message.svg" alt="message icon" />
        <p>Messages</p>
      </div>
      <div className={styles.item}>
        <img src="/assets/create.svg" alt="newpost icon" />
        <p>Create</p>
      </div>
      <div className={styles.item}>
        <img src="/assets/profile.svg" alt="profile icon" />
        <p>Create</p>
      </div>
    </div>
  );
};

export default AppMenu;
