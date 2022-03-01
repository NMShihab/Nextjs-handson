import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/CardProfile.module.css";

const CardProfile = (props) => {
  const router = useRouter();
  const { info } = props;
  console.log(info);
  let bStyle;

  if (info.gender == "Male") {
    bStyle = styles.borderM;
  } else {
    bStyle = styles.borderF;
  }

  const goToProfileDetails = () => {
    console.log("Clicked");
    router.push(`${info.country}/${info.id}`);
  };
  return (
    <div className={styles.card} onClick={goToProfileDetails}>
      <div className={bStyle}>
        <h1>
          Name : {info.first_name} {info.last_name}
        </h1>
        <h2>
          Gender :
          {info.gender === "Male" || info.gender === "Female"
            ? info.gender
            : "Not Specified"}
        </h2>
        <h3>Country : {info.country}</h3>
      </div>
      {props.children}
    </div>
  );
};

export default CardProfile;
