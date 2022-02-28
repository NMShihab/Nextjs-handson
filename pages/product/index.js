import Link from "next/link";

const Product = () => {
  const product = [
    { id: 1, pname: "Iphone" },
    { id: 2, pname: "Android" },
  ];
  console.log(product);
  return (
    <>
      <h1>Product</h1>
      <ul>
        {product.map((p) => (
          <li key={p.id}>
            {" "}
            <Link
              href={{
                pathname: "/product/[id]",
                query: { id: p.id },
              }}
            >
              {p.pname}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Product;
