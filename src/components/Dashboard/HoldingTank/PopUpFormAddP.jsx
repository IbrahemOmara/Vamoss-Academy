import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useFormik } from "formik";
import { baseURL } from "../../../utils/baseUrl";
import axios from "axios";
import { toast } from "react-toastify";

export default function PopUpFormAddP({ text, childId }) {
  const [open, setOpen] = useState(false);
  const [handSide, setHandSide] = useState(".");
  const [dataParent, setDataParent] = useState([]);
  const [left, setLeft] = useState("1");
  const [right, setRight] = useState("1");
  const [nameOfParent, setNameOfParent] = useState("");

  async function checkAboutHisChildren(referId) {
    await axios
      .get(`${baseURL}/User/CheckAboutHisChildren?sponsorId=${referId}`)
      .then(({ data }) => {
        console.log(data);
        data.map((item) => {
          if (item.handSide === "Left") {
            setLeft(true);
            if (right == "1") {
              setRight(false);
            }
            console.log(left, right);
          }
          if (item.handSide === "Right") {
            setRight(true);
            if (left == "1") {
              setLeft(false);
            }
            console.log(left, right);
          }
        });
        if (data.length < 2 && !left)
          toast.warning("You can add this parent, Choose Left for child");
        if (data.length < 2 && !right)
          toast.warning("You can add this parent, Choose Right for child");
        if (data.length == 2) toast.error("Sorry this parent is full child");
      })
      .catch((error) => {
        console.log(referId);
        console.log(error.response.data);
        if (error.response.data == "Sponsor not have children.")
          toast.success("Yes,You can add this parent");
        setRight(false);
        setLeft(false);
      });
  }

  async function getDataSponsorId(referId) {
    await axios
      .get(`${baseURL}/User/${referId}`)
      .then(({ data }) => {
        setDataParent(data);
        setNameOfParent(data.name);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  const checkParent = async () => {
    getDataSponsorId(addParent.values.parentId);
    checkAboutHisChildren(addParent.values.parentId);
  };

  async function addParentToNewMember(values) {
    await axios
      .post(`${baseURL}/User/AddParentToNewMember`, values)
      .then(({ data }) => {
        console.log(values);
        console.log(data);
        toast.success("Successfully added a parent");
      })
      .catch((error) => {
        console.log(values);
        console.log(error);
        toast.error(error);
      });
  }

  const addParent = useFormik({
    initialValues: {
      parentId: "",
      childId: "",
      handSide: "",
    },
    onSubmit: async (values) => {
      values.parentId = dataParent.customerAttributeId;
      values.childId = childId;
      values.handSide = handSide;
      await addParentToNewMember(values);
      setNameOfParent("");
      window.location.reload();
    },
  });

  const handelSide = (side) => {
    setHandSide(side);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="outlined"
        className="p-0 border-0 text-white"
        onClick={handleClickOpen}
      >
        {text}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Active</DialogTitle>
        <DialogContent className="py-0 " sx={{ pr: 10 }}>
          <form onSubmit={addParent.handleSubmit} className="">
            <div>
              <div className="mb-3 text-start">
                <label htmlFor="parentId" className="form-label">
                  Upline ID
                </label>
                <div className="sponser ">
                  <div className="row">
                    <div className="col-9">
                      <input
                        onChange={addParent.handleChange}
                        name="parentId"
                        type="text"
                        className="form-control text-black"
                        id="parentId"
                      />
                      <div className="text-main fw-bolder fs-small">
                        {nameOfParent}
                      </div>
                    </div>
                    <div className="col-3">
                      <button
                        onClick={checkParent}
                        type="button"
                        className="btn my-btn"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-1">
                <label htmlFor="handSide" className="form-label">
                  Choose Hand Side
                </label>
                <div className="row">
                  <div className="col-9">
                    <div className="position-relative rounded-3 border py-2 px-2 border-info">
                      <span>{handSide}</span>
                      <div className="position-absolute end-0 top-50 translate-middle-y">
                        <button
                          disabled={left}
                          onClick={() => handelSide("Left")}
                          type="button"
                          className={`btn p-0 border-0 text-black ${
                            !left ? "ts-zezag" : ""
                          }`}
                        >
                          <i className="fa-solid fa-caret-left fs-5"></i>
                        </button>
                        <button
                          disabled={right}
                          onClick={() => handelSide("Right")}
                          type="button"
                          className={`btn p-0 me-2 border-0  text-black ${
                            !right ? "ts-zezag" : ""
                          }`}
                        >
                          <i className="fa-solid fa-caret-right fs-5"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <DialogActions className="mt-4">
                <Button onClick={handleClose}>Cancel</Button>
                <Button disabled={left && right} type="submit">
                  Submit
                </Button>
              </DialogActions>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
