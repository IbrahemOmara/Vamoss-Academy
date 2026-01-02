import React from 'react'
import { Hourglass } from 'react-loader-spinner'

export default function BtnLoading({color}) {
  return (
    <>
     <div className="m-auto w-25 d-flex align-items-center justify-content-center">
     <Hourglass
        visible={true}
        height="30"
        width="30"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#fff', '#fff']}
        />
     </div>
    </>
  )
}
