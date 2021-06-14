import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import DropdownItem from './DropdownItem';
NavItem.propTypes = {
  category: PropTypes.object
}
NavItem.defaultProps = {
  category: {}
};
function NavItem(props) {
  const { category } = props
  return (
    <li className="nav-item">
      <NavLink activeClassName="selected" className="nav-item__link" to={`/danh-muc/${category.slug}`}>
        <span>{category.name}</span>
        {category.children.length > 0 && <i className='bx bx-chevron-down'></i>}
      </NavLink>
      {
        category.children.length > 0 ?
          (
            <ul className="dropdown">
              {
                category.children.map((item, index) => {
                  return (
                    <DropdownItem item={item} key={index} />
                  )
                })
              }
            </ul>
          ) : null
      }
    </li>
  )
}

export default NavItem
