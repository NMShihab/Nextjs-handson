import { useRouter } from "next/router";
import CardProfile from "../../../component/CardProfile";
import data from "../../../public/Data/MOCK_DATA.json";
import Image from "next/image";

const ProfileDetails = () => {
  const router = useRouter();

  const info = data.find((d) => d.id == router.query.id);
  console.log(info);

  const backThere = () => {
    router.back();
  };
  return (
    <div>
      <button onClick={backThere}>Back</button>
      <div>
        <h3>
          Name : {info?.first_name} {info?.last_name}
        </h3>
        <h3>Email : {info?.email}</h3>
        <h3>Gender : {info?.gender}</h3>
        <h3>Country : {info?.country}</h3>
        <h3>Car :{info?.car}</h3>
        <h3>Ip : {info?.ip_address}</h3>
      </div>
    </div>
  );
};

export default ProfileDetails;
