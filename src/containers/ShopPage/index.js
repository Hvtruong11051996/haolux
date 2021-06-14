import React, { useEffect, useRef, useState } from 'react'
import './ShopPage.scss'
import Filter from './components/Filter'
import Sidebar from './components/Sidebar'
import ProductItem from '../../components/ProductItem'
import { useParams } from 'react-router-dom'
import productApi from '../../api/productApi'
import Loading from './components/Loading'
import ReactPaginate from 'react-paginate';
import scrollToTop from '../../utils/scrollToTop'
import { limitProductCategory, URL_API } from '../../constants'
import Empty from '../../components/Empty'
const ShopPage = () => {
  const [sidebar, setSidebar] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [sort, setSort] = useState('')
  const [page, setPage] = useState(0)
  const [value, setValue] = useState({
    min: 200000,
    max: 1500000
  })
  const params = useParams()
  const { slug } = params
  const slugRef = useRef(slug)
  const timeRef = useRef(null)
  const onClickPagination = (e) => {
    scrollToTop()
    const selectedPage = e.selected;
    setCurrentPage(selectedPage + 1)
    setError(false)
  }
  async function getProduct() {
    if (slugRef.current !== slug) {
      slugRef.current = slug
      setCurrentPage(1)
      setError(false)
      setSidebar(false)
      setPage(0)
      setValue({
        min: 200000,
        max: 1500000
      })
    }
    if (error) {
      setCurrentPage(0)
      setPage(0)
    }
    try {
      setProducts([])
      setLoading(true)
      const limit = limitProductCategory
      const url = `${URL_API}/products/${slug}?limit=${limit}&page=${currentPage}&minPrice=${value.min}&maxPrice=${value.max}&${sort}`
      const res = await productApi.getProduct(url)
      const { products, totalPage } = res.data
      if (!products.length) {
        setPage(0)
        setError(true)
      }
      else {
        setProducts(products)
        setPage(totalPage)
        setError(false)
      }
      setLoading(false)
    }
    catch (err) {
      setLoading(false)
      setError(true)
    }
  }
  useEffect(() => {
    getProduct()
  }, [slug, currentPage, sort])
  const handlePrice = (e) => {
    const { min, max } = e
    if (timeRef.current) {
      clearTimeout(timeRef.current)
    }
    timeRef.current = setTimeout(() => {
      getProduct()
    }, 500)
    setValue({
      min, max
    })
  }
  return (
    <div className="shop">
      <div className="container">
        <div className="shop__heading">
          <Filter
            sidebar={sidebar}
            setSidebar={setSidebar}
            setSort={setSort}
            products={products}
          />
          <Sidebar
            sidebar={sidebar}
            handlePrice={handlePrice}
            value={value}
          />
        </div>
        {
          loading && <Loading />
        }
        {
          error ?
            <Empty title="Không có sản phẩm nào" />
            : null
        }
        {
          products.length ? <div className="shop__content">
            <div className="row">
              {
                products.map((product, index) => {
                  return (
                    <div
                      className="col-xl-3 col-lg-3 col-md-4 col-sm-6"
                      key={index}
                    >
                      <ProductItem
                        product={product}
                      />
                    </div>
                  )
                })
              }
            </div>
          </div>
            : null
        }
        {page > 1 &&
          <ReactPaginate
            pageCount={page}
            prevLabel={"Prev"}
            nextLabel={"Next"}
            containerClassName={"pagination"}
            pageClassName={"pagination-item"}
            activeClassName={"pagination-item--active"}
            pageLinkClassName={"pagination-link"}
            activeLinkClassName={"pagination-link--active"}
            nextLinkClassName={"pagination-next"}
            previousLinkClassName={"pagination-prev"}
            onPageChange={onClickPagination}
            initialPage={0}
          />
        }
      </div>
    </div>
  )
}

export default ShopPage
