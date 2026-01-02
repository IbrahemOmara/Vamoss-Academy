import React, { useEffect } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function SuccessPay() {
  // window.location.reload();
  useEffect(() => {
    localStorage.removeItem("cart_packages_Growth");
  }, []);
  return (
    <>
      <div className="success-pay vh-100 d-flex align-items-center justify-content-center">
        <div className="container">
          <div className=" d-flex justify-content-center align-items-center gap-2">
            <CheckCircleOutlineIcon style={{ fontSize: 100, color: "green" }} />
            <h1>Successfully Paid!</h1>
          </div>
        </div>
      </div>
    </>
  );
}
