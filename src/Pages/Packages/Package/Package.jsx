import React, { useContext, useState } from "react";
import imgPackage1 from "../../../assets/imgs/packages/package1.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BtnLoading from "../../../components/BtnLoading/BtnLoading";
import { StoreContext } from "../../../context/storeContext";
import WordLimit from "../../../components/WordLimet/WordLimet";

export default function Package({ pkg }) {
  const { countCartPkg, setCountCartPkg } = useContext(StoreContext);
  let navigate = useNavigate();
  const cart_packages =
    JSON.parse(localStorage.getItem("cart_packages_Growth")) || [];
  const [btnLoading, setBtnLoading] = useState(false);
  const getPackage = (_package) => {
    setBtnLoading(true);
    const foundpkg = cart_packages?.find((pkg) => pkg.id === _package.id);
    if (foundpkg) {
      setTimeout(() => {
        setBtnLoading(false);
        navigate(`/my-cart`);
      }, 1000);
      toast.warning("This package found in your cart!");
    } else {
      cart_packages.push(_package);
      setCountCartPkg(cart_packages.length);
      localStorage.setItem(
        "cart_packages_Growth",
        JSON.stringify(cart_packages)
      );
      setTimeout(() => {
        navigate(`/my-cart`);
        setBtnLoading(false);
      }, 2000);
    }

    console.log(cart_packages);
  };

  return (
    <>
      <div className="package">
        <div className="card">
          <div className="rounded-4 overflow-hidden">
            <img
              src={pkg.url || imgPackage1}
              className="card-img-top"
              alt="trade image"
            />
          </div>
          <div className="card-body position-relative">
            <h6>{pkg.name}</h6>
            {/* <p className="card-text text-black-50" >{pkg.shortDescription}</p> */}
            <WordLimit text={pkg.shortDescription} limit={15} />
            <div className="price-type d-flex gap-3">
              {/* <div className="price  d-flex gap-2 align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11.9.853a5.73 5.73 0 0 0-2.91 10.665l1.641-2.785a.154.154 0 0 0-.05-.204a2.35 2.35 0 1 1 2.635 0a.154.154 0 0 0-.049.204l1.642 2.785A5.73 5.73 0 0 0 11.899.852M5.73 11.689a5.73 5.73 0 1 0 0 11.458c3.179 0 5.807-2.699 5.727-5.876H8.23a.155.155 0 0 0-.152.157c-.008 1.266-1.064 2.34-2.35 2.34a2.35 2.35 0 1 1 .955-4.498a.154.154 0 0 0 .196-.06l1.646-2.793a5.705 5.705 0 0 0-2.797-.728m15.442.761l-1.637 2.788a.154.154 0 0 0 .05.205a2.35 2.35 0 0 1-1.31 4.3a2.35 2.35 0 0 1-1.325-4.295a.154.154 0 0 0 .049-.205l-1.646-2.782a5.73 5.73 0 1 0 5.82-.01"></path></svg>
                        <p className="m-0 text-black"><span>{pkg.price}</span> CV</p>
                    </div> */}
              <div className="type d-flex gap-2 align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 48 48"
                >
                  <circle
                    cx={24}
                    cy={34.748}
                    r={0.75}
                    fill="currentColor"
                  ></circle>
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M23.975 30.275V12.502"
                  ></path>
                  <circle
                    cx={24}
                    cy={24}
                    r={21.5}
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>
                </svg>
                <p className="m-0 text-black ">
                  {" "}
                  Package :<span className="ps-1">Basic</span>
                </p>
              </div>
            </div>
            <div className="price-egy mt-2">
              {/* EGP <span>{pkg.price}</span>00 */}
            </div>
            <button
              className="btn my-btn d-block mb-4 position-absolute bottom-0"
              disabled={btnLoading}
              onClick={() => getPackage(pkg)}
            >
              {btnLoading ? <BtnLoading color={"#000"} /> : " Get Package"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
