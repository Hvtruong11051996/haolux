import React from 'react'
import 'antd/dist/antd.css';
import { Select } from 'antd';
import './Filter.scss'
const { Option } = Select;
const Filter = ({ sidebar, setSidebar, setSort, products }) => {
  function handleChange(value) {
    setSort(value)
  }
  return (
    <div className="filter">
      <div className="filter-left">
        <Select
          className="filter-left__select"
          onChange={handleChange}
          defaultValue="sort=''"
        >
          <Option value="sort=''">Sắp xếp theo giá tiền </Option>
          <Option value="sort=price">Giá từ thấp đến cao</Option>
          <Option value="sort=-price">Giá từ cao đến thấp</Option>
        </Select>
      </div>
      <div className="filter-right">
        <div className="filter-right__result">
          <span>Hiển thị tất cả {products.length} kết quả</span>
        </div>
        <div className="filter-right__button" onClick={() => setSidebar(!sidebar)}>
          <span>Tìm kiếm</span>
          <i className='bx bx-menu'></i>
        </div>
      </div>
    </div>
  )
}

export default Filter
