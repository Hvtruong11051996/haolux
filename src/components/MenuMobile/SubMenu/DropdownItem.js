import React from 'react';
// import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';

const DropdownItem = (props) => {
  const { item, setToggle } = props
  return (
    <li className="dropdown-item">
      <NavLink onClick={() => setToggle()} to={`/danh-muc/${item.slug}`} className="dropdown-item__link"
        activeClassName="selected"
      >
        {item.name}
      </NavLink>
    </li>
  );
}

export default DropdownItem;
