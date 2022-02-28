import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  console.log(router);

  return <h1>This is product details of : {router.query.id}</h1>;
};

export default ProductDetails;
