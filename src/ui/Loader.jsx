import styles from './Loader.module.css'
function Loader() {
  return (
    <div className={styles.load}>
      <div className="loader"></div>
    </div>
  );
}

export default Loader