import { useRouter } from "next/router";
import data from "../../../public/Data/MOCK_DATA.json";
import CardProfile from "../../../component/CardProfile";
import styles from "../../../styles/Country.module.css";

const CountryList = () => {
  const router = useRouter();

  const filterData = data.filter((d) => d.country == router.query.country);

  console.log(filterData);
  return (
    <div className={styles.grid}>
      {filterData.map((d) => (
        <CardProfile key={d.id} info={d} />
      ))}
    </div>
  );
};

export default CountryList;
