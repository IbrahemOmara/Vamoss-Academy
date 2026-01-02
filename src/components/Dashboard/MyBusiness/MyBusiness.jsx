import React, { useContext, useEffect } from "react";
import { StoreContext } from "../../../context/storeContext";

export default function MyBusiness() {
  const { setTitleDashboard } = useContext(StoreContext);

  useEffect(() => {
    setTitleDashboard("My Reports");
  }, []);
  return (
    <>
      <section className="my-business">
        <div className="container-fluid text-center">
          <h1>Business Sooooon</h1>
        </div>
      </section>
    </>
  );
}
