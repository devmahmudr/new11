import { useState } from "react";
import "./_add.customer.scss";
import axios from "axios";

export default function AddCustomerCard({ active, title }) {
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    description: "",
    status: "Panding",
    deposite: 0,
    rate: 0,
    balance: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCustomerInfo({
      ...customerInfo,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/add", customerInfo, {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 5000,
      })
      .then((res) => {
        console.log(res);

        location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={active ? "add_customer_card" : "hidden"}>
      <h3>{title}</h3>
      <form action="POST" onSubmit={handleSubmit} className="">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          placeholder="John"
          onChange={handleChange}
          name="name"
          // value={customerInfo.name.toUpperCase().trim()}
          required={true}
        />
        <label htmlFor="descriptione">Description:</label>
        <input
          type="text"
          id="descriptione"
          placeholder="Description"
          onChange={handleChange}
          name="description"
          // value={customerInfo.description.trim(2)}
        />
        <label htmlFor="rate">Rate:</label>
        <input
          type="number"
          id="rate"
          placeholder="100"
          onChange={handleChange}
          name="rate"
          // value={customerInfo.rate}
        />
        <label htmlFor="deposite">Deposite:</label>
        <input
          type="number"
          name="deposite"
          id="deposite"
          placeholder="100"
          onChange={handleChange}
          // value={customerInfo.deposite}
        />
        <label htmlFor="balance">Balance:</label>
        <input
          type="number"
          name="balance"
          id="balance"
          placeholder="100"
          onChange={handleChange}
          // value={customerInfo.balance}
        />
        <input type="submit" value={"Send"} />
      </form>
    </div>
  );
}
