import { useState } from "react";
import "./_header.comp.scss";
import AddCustomerCard from "../addCustomer/add.customer";

export default function HeaderComp({onToggleCustomer, isActive}) {
  // const [isActive,setActive] = useState(false)
  
  // const handleChange = ()=>{
  //   setActive(!isActive)
  // }
  

  return (
    <div className="header_container">
      <header className="header_comp">
        <div className={!isActive ? "header_comp_left" : "hidden" }>
          <img src="/src/assets/lupa.svg" alt="search" className={!isActive ? "search_icon" : "hidden"} />
          <input type="search" name="search" id="search" placeholder="search" />
        </div>
        <div className="header_comp_right">
          <img src="/src/assets/plus.svg" alt="plus" className={!isActive ? "plus_icon" : "hidden"} />
          <img src="/src/assets/xmark.svg" alt="xmark" className={isActive ? "xmark_icon" : "hidden"} />
          <button className={!isActive ? "header_comp_add_btn" : "header_comp_cancel_btn"} onClick={onToggleCustomer}>{!isActive ? "ADD NEW CUSTOMER" : "CANCEL"}</button>
        </div>
      </header>
      <AddCustomerCard active={isActive}/>
    </div>
  );
}
