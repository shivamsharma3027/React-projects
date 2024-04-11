import React, { useContext, useEffect, useState } from "react";

import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../context/Context";
import Loading from "./Loading";
import axios from "../context/Axios";

const Home = () => {
  const [products] = useContext(ProductContext);

  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);
  const [filterProducts, setfilterProducts] = useState(null)
   

  const getProductCategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setfilterProducts(data);
    } catch (e) {
      console.log(e);
    }
  };
 

  useEffect(() => {
if(!filterProducts || category=="undefined") setfilterProducts(products);
    if (category!='undefined') getProductCategory();
  }, [category,products]);
  return products ? (
    <>
      <Nav />
      <div className=" w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        {filterProducts&& filterProducts.map((p, id) => (
          <Link
            key={p.id}
            to={`/details/${p.id}`}
            className="mr-3 mb-3 card p-3 border shadow rounded w-[18%] h-[40vh] flex-col flex justify-center items-center"
          >
            <div
              className="hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center "
              style={{
                backgroundImage: `url(${p.image})`,
              }}
            ></div>
            <h1 className="">{p.title}</h1>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
