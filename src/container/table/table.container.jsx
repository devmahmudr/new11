import { useEffect, useState } from "react";
import HeaderComp from "../../components/header/header.comp";
import "./_table.container.scss";
import axios from "axios";

export default function TableContainer() {
  const [showTable, setShowtable] = useState(false);
  const [data, setData] = useState({
    data: {},
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
  },[]);
  console.log(data);
  
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
          <tbody>
            <tr>
              <td scope="row">1</td>
              <td className="header_name">Ann Culhane</td>
              <td className="header_desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam?
              </td>
              <td className="header_status">OPEN</td>
              <td className="header_rate">$70.00</td>
              <td className="header_balance">-$270.00</td>
              <td className="header_deposite">$500.00</td>
            </tr>
            <tr>
              <td scope="row">1</td>
              <td className="header_name">Ann Culhane</td>
              <td className="header_desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam?
              </td>
              <td className="header_status">OPEN</td>
              <td className="header_rate">$70.00</td>
              <td className="header_balance">-$270.00</td>
              <td className="header_deposite">$500.00</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
