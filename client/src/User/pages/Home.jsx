import React, { useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { userContext } from "../contexts/UserContext";
import { CartContext } from "../contexts/CartContext";
import Shimmer from "../components/Shimmer";
import AgeVerification from "../components/AgeVerification";

import { AgeVerificationContext } from "../contexts/AgeVerificationContext";

const Home = () => {
  const { products } = useContext(ProductContext);
  const { userId } = useContext(userContext);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isVerified, setIsVerified] = useState(true);

  const { ageVerificationModal, setAgeverificationModal } = useContext(
    AgeVerificationContext
  );

  if (!products || products.length === 0) {
    return <Shimmer />;
  }

  // const onClose= ()=>{
  //   setAgeModal(false)
  // }
  // Function to handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Generate categories array
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  // Filter products based on the selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <>
      <section className="bg-white pt-16">
        <Banner />
        <div className="container mx-auto">
          {/* category */}
          <div className="grid grid-cols-3 p-2 lg:p-8 lg:grid-cols-8 lg:gap-5 ">
            {categories.map((category, index) => (
              <button
                key={index}
                className={` px-5 py-2 rounded-3xl flex justify-center items-center m-1 ${
                  selectedCategory === category
                    ? "bg-[#00DD9C] text-[#FDD100]"
                    : "bg-gray-200"
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 p-2 lg:p-8 lg:grid-cols-4 gap-3 lg:gap-7 mx-auto ">
            {filteredProducts &&
              filteredProducts.map((item) => (
                <Product product={item} key={item._id} />
              ))}
          </div>
        </div>
      </section>
      {ageVerificationModal ? <AgeVerification /> : ""}
    </>
  );
};

export default Home;
