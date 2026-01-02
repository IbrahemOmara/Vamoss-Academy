import React from "react";
import { MagnifyingGlass } from "react-loader-spinner";

export default function Loading() {
  return (
    <>
      <div className="w-100 vh-100 d-flex align-items-center justify-content-center">
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="magnifying-glass-loading"
          wrapperStyle={{}}
          wrapperClass="magnifying-glass-wrapper"
          glassColor="#c0efff"
          color="#0284E2"
        />
      </div>
    </>
  );
}
