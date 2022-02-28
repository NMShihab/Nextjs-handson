import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello Next js !!!!</h1>
      <ul>
        <li>
          <Link href="/product">product</Link>
        </li>
      </ul>
    </div>
  );
}
