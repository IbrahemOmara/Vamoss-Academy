import React, { useContext, useEffect } from "react";
import { StoreContext } from "../../../context/storeContext";

export default function MyReports() {
  const { setTitleDashboard } = useContext(StoreContext);

  useEffect(() => {
    setTitleDashboard("My Reports");
  }, []);
  return (
    <>
      <section className="reports">
        <div className="container-fluid text-center">
          <h1>Reports Sooooon</h1>
        </div>
      </section>
    </>
  );
}
