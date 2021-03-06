import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { actionAddToCart, actionGetCart } from '../../actions/cartAction'
import { actionGetProductSlug } from '../../actions/productAction'
import Skeleton from '../../components/Skeleton/Skeleton'
import ConvertVnd from '../../utils/convertVnd'
import ImageItem from './components/ImageItem'
import ProductRelate from './components/ProductRelate'
import SizeItem from './components/SizeItem'
// Toast
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './ProductDetailsPage.scss'
import LoadingButton from '../../components/LoadingButton'
function ProductDetailsPage() {
  const dispatch = useDispatch()
  const [product, setProduct] = useState([])
  const [relatedProducts, setRelatedProducts] = useState([])
  const [indexSize, setIndexSize] = useState(0)
  const [indexImage, setIndexImage] = useState(0)
  const [style, setStyle] = useState('')
  const [disable, setDisable] = useState(false)
  const { slug } = useParams()
  // GET Products Slug
  useEffect(() => {
    const action = actionGetProductSlug(slug)
    setIndexSize(0)
    setIndexImage(0)
    dispatch(action)
      .then((res) => {
        const { product, relatedProducts } = res.data
        setProduct(product)
        setRelatedProducts(relatedProducts.relatedProducts)
      })
      .catch((err) => {

      })
  }, [dispatch, slug])
  const onMouseMoveImages = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setStyle(`${x}% ${y}%`)
  }
  // Add To Cart
  const addToCart = (product, indexSize) => {
    const cartItem = {
      cartItemId: product._id,
      quantity: 1,
      size: product.sizeProduct[indexSize].size
    }
    setDisable(true)
    const action = actionAddToCart(cartItem)
    const actionGet = actionGetCart()
    dispatch(action)
      .then((res) => {
        toast.success("S???n ph???m ???? ???????c th??m v??o gi??? h??ng", {
          position: toast.POSITION.TOP_RIGHT
        })
        setDisable(false)
        dispatch(actionGet)
      })
      .catch(err => {
        toast.error("Vui l??ng ????ng nh???p", {
          position: toast.POSITION.TOP_RIGHT
        })
        setDisable(false)
      })
  }
  return (
    <div className="product-details">

      <div className="container-fluid responsive">
        {/* <Breadcrumb pathname={pathname.split('/')} /> */}
        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className="product-details__left">
              <ul className="product-slider">
                {product.productImage ?
                  product.productImage.map((productImage, index) => {
                    return (
                      <ImageItem
                        key={index}
                        productImage={productImage}
                        setIndexImage={setIndexImage}
                        index={index}
                        indexImage={indexImage}
                      />
                    )
                  })
                  :
                  <>
                    <Skeleton type="image-slider" />
                    <Skeleton type="image-slider" />
                    <Skeleton type="image-slider" />
                    <Skeleton type="image-slider" />
                    <Skeleton type="image-slider" />
                    <Skeleton type="image-slider" />
                  </>
                }
              </ul>
              {
                product.productImage ?
                  <div
                    className="product-img"
                    style={{
                      backgroundImage: `url(${product.productImage[indexImage].img})`,
                      backgroundPosition: style
                    }}
                    onMouseMove={onMouseMoveImages}
                  >
                    <img
                      src={product.productImage[indexImage].img}
                      alt=""
                      className="hi"
                    />
                  </div>
                  :
                  <div className="product-img">
                    <Skeleton type="images-details" />
                  </div>
              }
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="product-details__right">
              <h3 className="product-title">
                {product.title ? product.title : <>
                  <Skeleton type="title-details" />
                  <Skeleton type="title-details" />
                </>
                }
              </h3>
              <div className="product-desc">
                {product.description ? product.description : <>
                  <Skeleton type="desc-details" />
                  <Skeleton type="desc-details" />
                  <Skeleton type="desc-details" />
                  <Skeleton type="desc-details" />
                  <Skeleton type="desc-details" />
                </>}
              </div>
              <div className="product-status">
                <span>Tr???ng th??i:</span>
                {
                  product.price ?
                    <>
                      {
                        product.quantity ?
                          <span className="stock">
                            <i className='bx bx-check-circle'></i>
                            C??n h??ng
                        </span> :
                          <span className=" stock out-stock">
                            <i className='bx bx-check-circle'></i>
                            H???t h??ng
                        </span>
                      }
                    </>
                    :
                    <Skeleton type='status-details' />
                }

              </div>
              <div className="product-price">
                {product.price ? ConvertVnd(product.price) :
                  <Skeleton
                    type="price-details"
                  />}
              </div>
              <div className="product-size">
                <h3 className="product-size__title">
                  Size:
                </h3>
                <ul className="product-size__list">
                  {
                    product.sizeProduct ?
                      (product.sizeProduct.map((productSize, index) => {
                        return (
                          <SizeItem
                            key={index}
                            setIndexSize={setIndexSize}
                            productSize={productSize}
                            index={index}
                            indexSize={indexSize}
                          />
                        )
                      })) :
                      <>
                        <Skeleton type="size-details" />
                        <Skeleton type="size-details" />
                        <Skeleton type="size-details" />
                        <Skeleton type="size-details" />
                        <Skeleton type="size-details" />
                        <Skeleton type="size-details" />
                      </>
                  }
                </ul>
              </div>
              <div className="product-button">
                {
                  disable ? <LoadingButton /> : <button
                    className="product-button__add"
                    onClick={() => addToCart(product, indexSize)}
                  >
                    <i className='bx bx-cart' ></i>
                    <span>MUA H??NG</span>
                  </button>
                }
              </div>
              <div className="sale-product">
                <h4 className="sale-product__title">
                  KHUY???N M??I KHI MUA H??NG
                </h4>
                <ul className="sale-list">
                  <li className="sale-list__item">
                    <i className="fas fa-check-circle"></i>
                    <span>Mi???n ph?? ship h??ng to??n qu???c cho ????n h??ng tr??n 2 tri???u.</span>
                  </li>
                  <li className="sale-list__item">
                    <i className="fas fa-check-circle"></i>
                    <span>V???i ????n h??ng d?????i 2 tri???u, ph?? ship ?????ng gi?? 30k.</span>
                  </li>
                  <li className="sale-list__item">
                    <i className="fas fa-check-circle"></i>
                    <span>Nh???n h??ng v?? ki???m tra tr?????c khi thanh to??n.</span>
                  </li>
                  <li className="sale-list__item">
                    <i className="fas fa-check-circle"></i>
                    <span>Giao h??ng nhanh 60 ph??t trong n???i th??nh H?? N???i. Tp HCM.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="product-details__bottom">
          <div className="title">
            H??nh ???nh chi ti???t<Link to={`/product/${product.slug}`}>{product.title}</Link>???????c ch???p t???i Shop gi??y H??o Nguy???n.
            </div>
          {
            product.productImage &&
            <ul className="product-images__list">
              {
                product.productImage.map((product, index) => {
                  return (
                    <li
                      className="product-images__item"
                      key={index}
                    >
                      <img className="details" src={product.img} alt="" />
                    </li>
                  )
                })
              }
            </ul>
          }
        </div>
      </div>
      <ProductRelate productList={relatedProducts} />
    </div>
  )
}

export default React.memo(ProductDetailsPage)
