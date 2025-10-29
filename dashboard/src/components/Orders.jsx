import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  let [orders, setOrders] = useState([]);
  let [isorder, setIsOrder] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8080/Orderlist").then((res) => {
      setOrders(res.data);
      setIsOrder(res.data.length>0 ? true:false);
    });
  }, []);
  
  return (
    <div className="orders">
      {!isorder &&
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>}
      {isorder &&
        <div className="order-table">
          <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>mode</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map((order) => {
                return <tr>
                  <td>{order.name}</td>
                  <td>{order.price}</td>
                  <td>{order.qty}</td>
                  <td>{order.mode}</td>
                </tr>
              })
            }
          </tbody>
        </table>

        </div>}
    </div >
  );
};

export default Orders;