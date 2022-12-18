import styles from "./layout.module.css";

console.log(styles);

function StyledCssModules() {
  return (
    <div>
      <h1 className={styles.title}>Some title</h1>

      {/* This should be unnecessary */}
      <h1 className={styles.title2 + " " + styles.rounded}>Another title</h1>
      <h1 className={[styles.title2, styles.rounded].join(" ")}>
        Another title
      </h1>
    </div>
  );
}

export default StyledCssModules;
