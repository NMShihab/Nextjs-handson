import { useRouter } from "next/router";
import data from "../../public/Data/MOCK_DATA.json";

const CountryList = () => {
  const router = useRouter();

  const filterData = data.filter((d) => d.country == router.query.country);

  console.log(filterData);
  return (
    <>
      <h1>{router.query.country}</h1>
      {filterData.map((d) => (
        <h3 key={d.id}>{d.first_name}</h3>
      ))}
    </>
  );
};

export default CountryList;
