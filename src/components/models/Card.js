import { Icon } from "@iconify/react";
import Image from "next/image";

const products = [
  {
    id: 1,
    image: "/images/product-2.png",
    name: "FOREST HONEY",
    price: 169,
    oldPrice: 200,
    weight: "1KG",
  },
  {
    id: 2,
    image: "/images/product-1.png",
    name: "MOUNTAIN HONEY",
    price: 150,
    oldPrice: 180,
    weight: "500G",
  },
  {
    id: 3,
    image: "/images/product-3.png",
    name: "WILD HONEY",
    price: 190,
    oldPrice: 220,
    weight: "750G",
  },
  {
    id: 4,
    image: "/images/product-4.png",
    name: "PURE HONEY",
    price: 200,
    oldPrice: 250,
    weight: "1KG",
  },
];

// کامپوننت Card برای نمایش هر محصول
const Card = ({ product }) => {
  return (
    <div className="p-5 border rounded-lg shadow-lg">
      <Image
        width={300}
        height={300}
        src={product.image}
        alt={product.name}
        className="w-full h-auto"
      />
      <h2 className="text-lg font-bold mt-3">{product.name}</h2>
      <div className="flex justify-between items-center mt-2">
        <span className="text-green-600 font-semibold">
          ${product.price}{" "}
          <b className="line-through text-red-500">${product.oldPrice}</b>
        </span>
        <span className="text-gray-500">Weight: {product.weight}</span>
      </div>
      <button className="mt-4 flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
        <Icon icon="akar-icons:cart" />
        ADD TO CART
      </button>
    </div>
  );
};

// کامپوننت اصلی که لیست کارت‌ها را نمایش می‌دهد
const ProductList = () => {
  return (
    <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
