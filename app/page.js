import { terminology } from "@/terminology";
import styles from "./page.module.css";

export default function Home() {
  const organisedWord = terminology.sort((a, b) =>
    a.term.localeCompare(b.term)
  );
  return (
    <>
      <div className={styles.mainContainer}>
        <h2>Key Terminology</h2>
      <h4 className={styles.heading}> Analytics</h4>
        {organisedWord &&
          organisedWord.map(
            (item, index) =>
              item.course === "analytics" && (
                <div className={styles.subContainer}>
                  <br></br>
                  <span className={styles.word}>{item.term}</span>: {item.definition}<br></br>
                </div>
              )
          )}
          <h4 className={styles.heading}>Marketing in Attention</h4>
        {organisedWord &&
          organisedWord.map(
            (item, index) =>
              item.course === "marketing in attention" && (
                <div className={styles.subContainer}>
                  <br></br>
                  <span className={styles.word}>{item.term} </span>: {item.definition}
                </div>
              )
          )}
      </div>
    </>
  );
}
