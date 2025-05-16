import { useEffect, useState } from "react";
import HeaderComp from "../../components/header/header.comp";
import "./_table.container.scss";
import axios from "axios";
import React from "react";
import AddCustomerCard from "../../components/addCustomer/add.customer";

export default function TableContainer() {
  const [showTable, setShowtable] = useState(false);
  const [openRowId, setOpenRowId] = useState(null);

  const [data, setData] = useState({
    data: [],
    isFatched: false,
    err: false,
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/", {
        timeout: 5000,
      })
      .then((res) => {
        setData({
          isFatched: true,
          data: res.data,
          err: false,
        });
      })
      .catch((err) => {
        console.log(err);
        setData({
          err: true,
          isFatched: true,
          data: null,
        });
      });
  }, []);

  const deleteF = (id) => {
    axios
      .delete(`http://localhost:8080/delete/${id}`, {
        timeout: 5000,
      })
      .then((res) => {
        setData((prev) => ({
          ...prev,
          data: prev.data.filter((item) => item.id !== id),
        }));
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const cancelF = () => {
    setOpenRowId(null);
  };
  return (
    <div className="table_container">
      <HeaderComp
        onToggleCustomer={() => setShowtable(!showTable)}
        isActive={showTable}
      />
      {!showTable && (
        <table>
          <thead>
            <tr>
              <th scope="col" className="header_id">
                Id
              </th>
              <th scope="col" className="header_name">
                Name
              </th>
              <th scope="col" className="header_desc">
                Description
              </th>
              <th scope="col" className="header_status">
                Status
              </th>
              <th scope="col" className="header_rate">
                Rate
              </th>
              <th scope="col" className="header_balance">
                Balance
              </th>
              <th scope="col" className="header_deposite">
                Deposite
              </th>
            </tr>
          </thead>
          {data.isFatched && data.data && data.data.length > 0 ? (
            <tbody>
              {data.data.map((customer) => (
                <React.Fragment key={customer.id}>
                  <tr onClick={() => setOpenRowId(customer.id)}>
                    <td>{customer.id}</td>
                    <td className="header_name">
                      {customer.name.toUpperCase().trim()}
                    </td>
                    <td className="header_desc">{customer.description}</td>
                    <td className="header_status">
                      {customer.status.toUpperCase()}
                    </td>
                    <td className="header_rate">{customer.rate}</td>
                    <td className="header_balance">{customer.balance}</td>
                    <td className="header_deposite">{customer.deposite}</td>
                  </tr>

                  {openRowId === customer.id && (
                    <tr className="expand-row">
                      <td colSpan="8">
                        <div className="button-wrapper">
                          <button className="edit_btn btn_default" hidden >Edit</button>
                          <button
                            onClick={() => deleteF(customer.id)}
                            className="delete_btn btn_default"
                          >
                            Delete
                          </button>
                          <button
                            className="cancel_btn btn_default"
                            onClick={cancelF}
                          >
                            Cancel
                          </button>
                        </div>
                      </td>
                    </tr>
                  )}

                </React.Fragment>
              ))}
              {/* <AddCustomerCard active={true} title={"EDIT CUSTOMER"}/> */}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td colSpan="8">No data found</td>
              </tr>
            </tbody>
          )}
        </table>
      )}
    </div>
  );
}
