import React from 'react'
import './Packages.css'
import bgSearch from '../../assets/imgs/packages/mainPackages.png'
import Categories from './Categories/Categories'

export default function Packages() {
  return (
    <section className='packages mt-5 pt-5'>
      <div className="container">
        <div className="row">
          <div className="col-12 position-relative">
            <div className="">
              <div className="search position-absolute w-50">
                <h1 className='fw-bolder text-center'>Our Packages</h1>
                <form >
                  <div className="row mt-4 position-relative ">
                    <input className='form-control' type="text" name="search" id="search" placeholder="Search" />
                    <button type='button' className='btn position-absolute bg-info end-0 w-25'> <i className="fa-solid fa-magnifying-glass"></i></button>
                  </div>
                </form>
              </div>
              <div className="bg ">
                <img className='w-100 h-100 object-fit-fill' src={bgSearch} alt="packages growth"/>
              </div>
            </div>
          </div>
        </div>
        
        <div className="categories mt-4">
          <h2 className='border-bottom pb-3'>Categories</h2>
          <Categories/>
        </div>
      </div>
    </section>
  )
}
