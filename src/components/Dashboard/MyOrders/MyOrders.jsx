import axios from "axios";
import React, { useContext, useState } from "react";
import { baseURL } from "../../../utils/baseUrl";
import { useQuery } from "react-query";
import Loading from "../../Loading/Loading";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { StoreContext } from "../../../context/storeContext";
import { useEffect } from "react";

export default function MyOrders() {
  const [dataUser, setDataUser] = useState(JSON.parse(localStorage.dataAuth));
  const { setTitleDashboard } = useContext(StoreContext);

  const getOrders = (id) => {
    return axios.get(`${baseURL}/Orders/GetCustomerOrders?customerId=${id}`);
  };

  const { data: orders, isLoading } = useQuery(
    "getOrders",
    () => getOrders(dataUser.customerAttributeId),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchInterval: false,
    }
  );

  // console.log(orders);

  useEffect(() => {
    setTitleDashboard("My Orders");
  }, []);

  if (isLoading) return <Loading />;

  return (
    <>
      <section className="my-orders">
        <div className="container">
          {/* <h1>My Orders</h1> */}
          <div className="row mt-5">
            <div className="col-12">
              <div
                className=" table-responsive rounded-3 box-chart"
                style={{ maxWidth: "" }}
              >
                <table className="table table-borderless table-hover text-center fw-bold">
                  <thead>
                    <tr className="bg-dash text-start">
                      <th scope="col">Serial</th>
                      <th scope="col">Package</th>
                      <th scope="col">Date</th>
                      <th scope="col">Price</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders?.data.map((order,index) => {
                      return (
                        <tr className="border-bottom fs-small fw-light text-start py-3" key={order.orderId}>
                          <td>{index+1}</td>
                          <td>{order.packageName}</td>
                          <td className="">
                            {order.creationDate
                              ? format(
                                  new Date(order.creationDate),
                                  "MMM d, y h:m a"
                                )
                              : "No Date"}
                          </td>
                          <td>{order.cost}</td>
                          <td className="">
                            <Link
                              type="button"
                              className="my-btn d-block m-auto text-center "
                              to={`view-order/${order.orderId}`}
                            >
                              View Now
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
