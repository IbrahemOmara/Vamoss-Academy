import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import SponsorId from "../../components/SponsorId/SponsorId";
import TabsSpons from "./TabsSpons";

export default function PopUpSponsorId({ text, pay }) {
  const [open, setOpen] = useState(false);

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
        className="p-0 border-0 text-white my-btn"
        onClick={handleClickOpen}
      >
        {text}
      </Button>
      <Dialog open={open} onClose={handleClose} className="">
        <DialogTitle className="bg-main-color text-white">
          Do you have Sponsor Id ?
        </DialogTitle>
        <DialogContent
          className="py-0 bg-main-color position-relative"
          sx={{ pr: 10, width: "500px", height: "250px" }}
        >
          {/* <SponsorId/> */}
          <TabsSpons />

          <div className="position-absolute bottom-0 end-0 me-3 mb-3">
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="button"  onClick={pay}>Submit</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
