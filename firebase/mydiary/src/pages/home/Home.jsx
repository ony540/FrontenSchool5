import React from "react";
import styles from "./Home.module.css";
import DiaryForm from "./Diaryform";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import DiaryList from "./DiaryList";

export default function Home() {
  const today = new Date(),
    year = today.getFullYear(),
    // padStart 두자리로 앞에 비워지면 0 으로 채우기
    month = String(today.getMonth() + 1).padStart(2, "0"),
    date = String(today.getDate()),
    todate = `${year}.${month}.${date}`;

  const { user } = useAuthContext();
  const { documents, error } = useCollection("diary");

  return (
    <div className={styles.container}>
      <main className={styles["diary-main"]}>
        <h2 className={styles.heart}>{todate}의 비밀일기</h2>
        <DiaryForm uid={user.uid}></DiaryForm>
      </main>
      <section>
        <h2 className="a11y-hidden">일기 목록</h2>
        <ul className={styles.content_list}>
          {error && <strong>{error}</strong>}
          {documents && <DiaryList diaries={documents} />}
        </ul>
      </section>
    </div>
  );
}
