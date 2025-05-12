import "./_header.comp.scss";

export default function HeaderComp() {
  return (
    <div className="header_container">
      <header className="header_comp">
        <div className="header_comp_left">
          <img src="/src/assets/lupa.svg" alt="search" className="seach_icon" />
          <input type="search" name="search" id="search" placeholder="search" />
        </div>
        <div className="header_comp_right">
          <img src="/src/assets/plus.svg" alt="plus" className="plus_icon" />
          <button className="header_comp_add_btn">ADD NEW CUSTOMER</button>
        </div>
      </header>
      {/* <table>
        <thead>
          <tr>
            <th scope="col" className="header_id">Id</th>
            <th scope="col" className="header_name">Name</th>
            <th scope="col" className="header_desc">Description</th>
            <th scope="col" className="header_status">Status</th>
            <th scope="col" className="header_rate">Rate</th>
            <th scope="col" className="header_deposite">Deposite</th>
          </tr>
        </thead>
      </table> */}
    </div>
  );
}
