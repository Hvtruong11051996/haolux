import React from 'react'
import './Sidebar.scss'
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import ConvertVnd from '../../../../utils/convertVnd';
function Sidebar({ sidebar, value, handlePrice }) {
  return (
    <div className={sidebar ? "sidebar active" : "sidebar"}>
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="sidebar-item">
            <h2 className="sidebar-item__title">CHẤT LƯỢNG</h2>
            <ul className="sidebar-checkbox">
              <li className="sidebar-checkbox__item">
                <input type="checkbox" id="checkbox1" />
                <label htmlFor="checkbox1">In stock</label>
              </li>
              <li className="sidebar-checkbox__item">
                <input type="checkbox" id="checkbox2" />
                <label htmlFor="checkbox2">Out of stock</label>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="sidebar-item sidebar-item--price">
            <h2 className="sidebar-item__title">GIÁ TIỀN</h2>
            <div className="sidebar-price">
              <InputRange
                formatLabel={value => `${ConvertVnd(value)}`}
                step={10000}
                minValue={200000}
                maxValue={1500000}
                value={value}
                onChange={(e) => handlePrice(e)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
