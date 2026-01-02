import React, { useContext, useEffect, useState } from "react";
import imgPackage1 from "../../assets/imgs/packages/package1.png";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import SponsorId from "../../components/SponsorId/SponsorId";
import PopUpSponsorId from "./PopUpSponsorId";
import { StoreContext } from "../../context/storeContext";

export default function Cart() {
  const { setCountCartPkg } = useContext(StoreContext);
  let navigate = useNavigate();
  const [cart_packages, setCart_packages] = useState(
    JSON.parse(localStorage.getItem("cart_packages_Growth")) || []
  );

  const removePkg = (pkg) => {
    setCart_packages(cart_packages.filter((pk) => pk.id !== pkg.id));
  };

  let totalCost = 0;
  cart_packages.map((pkg) => {
    totalCost += pkg.price;
  });

  console.log(cart_packages);

  const pay = (id) => {
    navigate(`/pay/${totalCost}`);
  };

  useEffect(() => {
    localStorage.setItem("cart_packages_Growth", JSON.stringify(cart_packages));
    setCountCartPkg(cart_packages.length);
  }, [cart_packages]);

  return (
    <>
      <section
        className="cart min-vh-100 d-flex justify-content-center align-items-center"
        id="cart"
      >
        {!cart_packages.length ? (
          <h1 className="text-center">No Items in Cart</h1>
        ) : (
          <div className="container">
            <h5 className=" pb-2 my-fw-bold mb-5 w-50">
              {cart_packages.length} item in your cart Your Cart
            </h5>
            <div className="row gy-5 justify-content-between align-items-center">
              <div className="col-md-7">
                <div className="header-cart d-flex justify-content-between px-3 mb-3">
                  <div className="item">
                    <h6>Item</h6>
                  </div>
                  <div className="price">
                    <h6>Price</h6>
                  </div>
                </div>
                <div className="row gy-4">
                  {cart_packages?.map((pkg) => {
                    return (
                      <div className="col-12" key={pkg.id}>
                        <div className="cart-box pb-3">
                          <div className="item d-flex align-items-center gap-2">
                            <div className="img-cart">
                              <img
                                src={pkg.url || imgPackage1}
                                alt="cart Growth"
                              />
                            </div>
                            <h6 className="my-fw-bold">{pkg.name}</h6>
                          </div>
                          <span className="fw-medium pe-2">${pkg.price}</span>
                          <button
                            onClick={() => removePkg(pkg)}
                            type="button"
                            className="btn text-danger fs-5"
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-md-4">
                <div className="cart-summary p-3 d-flex flex-column align-items-center box-chart rounded-1">
                  <h5 className="my-fw-bold w-100">Summary</h5>

                  <div className="row w-100 mt-3">
                    <div className="col-6 p-0">
                      <h6 className="">Grand Total</h6>
                    </div>
                    <div className="col-6 text-end">
                      <h6>${totalCost}</h6>
                    </div>
                  </div>
                  <div className="row w-100 justify-content-center mt-3">
                    <div className="col-7 text-end p-0">
                      {/* <button
                        onClick={pay}
                        type="button"
                        className="btn text-white my-btn"
                      >
                        Checkout
                      </button> */}

                      <PopUpSponsorId text={"Checkout"} pay={pay} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <SponsorId/> */}
          </div>
        )}
      </section>
    </>
  );
}
