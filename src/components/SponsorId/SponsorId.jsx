import axios from "axios";
import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { baseURL } from "../../utils/baseUrl";
import BtnLoading from "../BtnLoading/BtnLoading";
import { StoreContext } from "../../context/storeContext";

export default function SponsorId() {
  //   const [isSearchedSpons, setIsSearchedSpons] = useState(false);
  const [btnLoading,setBtnLoading] = useState(false);
  const [sponsorData, setSponsorData] = useState({});
  const [notValidSponsId, setNotValidSponsId] = useState("d-none");
  const [disabled, setDisabled] = useState("btn disabled opacity-25 border-0");
  const {setSponsorAttributeId} = useContext(StoreContext);

  //search about sponsor id to sponsorId
  async function searchSponserId(id) {
    console.log(id);
    await axios
      .get(`${baseURL}/User/${id}`)
      .then(({ data }) => {
        console.log(data);
        setSponsorData(data);
        setSponsorAttributeId(data.customerAttributeId);
        setDisabled("btn btn-primary border-0");
        setNotValidSponsId("d-none");
      })
      .catch((error) => {
        setDisabled("");
        console.log(error);
        setNotValidSponsId("d-block");
      });
  }

  //fuction search and allow form to submit
  const search = async (sponsorId) => {
    await searchSponserId(sponsorId);
  }

  let sponsorId = useFormik({
    initialValues: {
      sponsorId: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      setBtnLoading(true);
      await searchSponserId(values.sponsorId);
      setBtnLoading(false);
    },
  });

  return (
    <>
      <form
        onSubmit={sponsorId.handleSubmit}
        onChange={sponsorId.handleChange}
        className=""
      >
        <div className="row">
          <div className="col-12">
            <label htmlFor="sponsorId" className="form-label text-white">
              Sponsor ID
            </label>
            <div className="sponser d-flex gap-4">
              <input
                onChange={sponsorId.handleChange}
                name="sponsorId"
                type="text"
                className="form-control bg-dash gradient-border rounded-0 text-white"
                id="sponsorId"
              />
              <button
                // disabled={btnLoading}
                type="submit"
                // onClick={() => search(sponsorId.values.sponsorId)}
                // type="button"
                className="btn bg-grdient text-white"
              >
                {btnLoading ? <BtnLoading /> : "Search"}
              </button>
            </div>
            <div
              className={`${notValidSponsId} alert alert-danger p-1 fs-small mt-2 w-100`}
              role="alert"
            >
              ID Not Found, Please enter valid ID
            </div>
          </div>
          <div className="col-12 mt-3"> 
             <div className="p-2 d-flex align-items-center rounded-3 gradient-border text-white" style={{height:'40px'}}>{sponsorData.name}</div>
          </div>
        </div>
      </form>
    </>
  );
}
