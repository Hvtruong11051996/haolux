import React, { useState } from 'react'
import scrollToTop from '../../utils/scrollToTop'
import './Pagination.scss'
function Pagination({ setCurrentPage, pageNumber, currentPage }) {
  const [prevPage, setPrevPage] = useState(1)
  const [nextPage, setNextPage] = useState(5)
  const render = []
  const onClickSetCurrentPage = (page) => {
    scrollToTop()
    setCurrentPage(page)
    if (page <= 3) {
      setPrevPage(1)
    }
    if (page > 3) {
      setPrevPage(page - 2)
    }
    if (page >= 3 && page < pageNumber - 1) {
      setNextPage(page + 2)
    }
    if (page >= pageNumber - 2 && page !== pageNumber) {
      setNextPage(pageNumber)
    }
    if (page > pageNumber - 2 && page !== pageNumber) {
      setPrevPage(page - 3)
    }
    if (page === pageNumber) {
      setPrevPage(page - 4)
      setNextPage(pageNumber)
    }
  }
  for (let i = prevPage; i <= nextPage; i++) {
    render.push(i)
  }
  return (
    <div className="pagination">
      <ul className="pagination-list">
        {
          currentPage > 1 ? <li
            onClick={() => onClickSetCurrentPage(currentPage - 1)}
            className=" pagination-list__item"
          >
            <i className='bx bx-chevrons-left' ></i>
          </li>
            : null
        }
        {
          render.map((page, index) => (
            <li
              className={
                currentPage === page ? "pagination-list__item active" : "pagination-list__item"
              } key={index}
              onClick={() => onClickSetCurrentPage(page)}
            >
              {page}
            </li>
          ))
        }
        {
          currentPage < pageNumber - 2 && <li onClick={() => onClickSetCurrentPage(currentPage + 1)} className="pagination-list__item">
            <i className='bx bx-chevrons-right' ></i>
          </li>
        }
      </ul>

    </div>
  )
}

export default Pagination
