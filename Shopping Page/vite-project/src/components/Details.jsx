import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../context/Context";
import axios from "../context/Axios";
import Loading from "./Loading";

const Details = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const [products] = useContext(ProductContext);
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setProduct(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getSingleProduct();
  }, []);

  return product ? (
    <div className="w-[70%] flex  items-center h-full m-auto  p-[10%]">
      <img
        className="object-contain  h-[70%] w-[40%]"
        src={`${product.image}`}
        alt=""
      />
      <div className="content w-[50%] ml-[70px]">
        <h1 className="text-4xl">
          {product.title}
        </h1>
        <h3 className="text-zinc-400 my-5">{product.category}</h3>
        <h2 className="text-green-600 mb-5">${product.price}</h2>
        <p className="mb-[5%]">
         {product.description}
        </p>
        <Link className="hover:text-blue-700  mr-5 py-2 px-5 border rounded border-blue-400 text-blue-300">
          Edit
        </Link>
        <Link className="hover:text-red-700 py-2 px-5 border rounded border-red-400 text-red-300">
          Delete
        </Link>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
