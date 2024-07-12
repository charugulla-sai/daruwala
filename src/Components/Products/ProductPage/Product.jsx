import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../Redux/Slices/searchSlice";
import { useCartValues } from "../../../Context/CartContext";
import { useUserContextValues } from "../../../Context/UserContext";

export default function Product() {
  const { productId } = useParams();
  // const [product, setProduct] = useState({});
  const { product, isLoading } = useSelector((state) => state.search);
  const searchDispatch = useDispatch();
  const { addItemToCart } = useCartValues();
  const { verify } = useUserContextValues();

  useEffect(() => {
    searchDispatch(getProduct(productId));
  }, []);

  return (
    <>
      {!isLoading ? (
        <div>
          <div className="flex w-[1100px] mx-auto my-0 gap-[64px] items-start">
            <div className="image_box bg-white w-[340px] py-[24px] px-[48px]">
              <img className="image w-full h-full" src={product.imageUrl} />
            </div>
            <div className="desc_box pt-10">
              <h3 className="uppercase text-3xl mb-4">{product.category}</h3>
              <h1 className="text-6xl font-extrabold mb-8">{product.title}</h1>
              <p className="text-2xl mb-10">{product.description}</p>
              <div className="flex">
                <div className="size_price_box">
                  <p className="">{product.size}</p>
                  <p>Rs.700</p>
                </div>
                <button
                  onClick={() => {
                    if (verify()) {
                      addItemToCart(product._id);
                    }
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}
