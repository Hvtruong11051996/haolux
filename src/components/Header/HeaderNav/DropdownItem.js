import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
DropdownItem.propTypes = {
  item: PropTypes.object
}
DropdownItem.defaultProps = {
  item: {}
};
function DropdownItem({ item }) {
  return (
    <li className="dropdown-item">
      <NavLink to={`/danh-muc/${item.slug}`}
        className="dropdown-item__link"
        activeClassName="selected"
      >
        {item.name}
      </NavLink>
    </li>
  )
}

export default DropdownItem
