import styles from "../styles/Home.module.css";
import Link from "next/link";
import data from "../public/Data/MOCK_DATA.json";

export default function Home() {
  console.log(data);
  let countryData = new Set();

  data.map((d) => countryData.add(d.country));

  countryData = [...countryData];
  console.log(countryData);

  return (
    <div className={styles.container}>
      <h1>Featured Country</h1>
      <div className={styles.grid}>
        {countryData.map((c, index) => (
          <Link href={`/profile/${c}`} key={index} passHref>
            <div className={styles.card}>{c}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
