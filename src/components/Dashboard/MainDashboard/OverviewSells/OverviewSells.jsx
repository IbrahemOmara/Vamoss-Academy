import React from 'react';
import MyPieChart from '../../Charts/MyPieChart';

export default function OverviewSells() {
  return (
    <>
     <div className="over-sell px-4 w-100">
        <div style={{border:'5px solid red !important', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <MyPieChart/>
        </div>
        <div className="row justify-content-center my-4 fs-small">
            <div className="col-4 col-md-5 col-lg-4 p-1">
            <div style={{backgroundColor:'#0AF859'}} className="color-desc">
                <h6 className="">Total Direct sells</h6>
            </div>
            </div>
            <div className="col-4 col-md-5 col-lg-4 p-1">
            <div style={{backgroundColor:'#BAC8FF'}} className="color-desc">
                <h6 className="">Total Revenue</h6>
            </div>
            </div>
            <div className="col-4 col-md-5 col-lg-4 p-1">
            <div style={{backgroundColor:'#8697D9'}} className="color-desc">
                <h6 className="">Total Users</h6>
            </div>
            </div>
        </div>
     </div>
    </>
  )
}
