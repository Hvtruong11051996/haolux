import React from 'react'
import Skeleton from './Skeleton'

export default function SkeletonProductDetails() {
  return (
    <div className="product-details">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className="product-details__left">
              <ul className="product-slider">
                <Skeleton type="image-slider" />
                <Skeleton type="image-slider" />
                <Skeleton type="image-slider" />
                <Skeleton type="image-slider" />
                <Skeleton type="image-slider" />
                <Skeleton type="image-slider" />
              </ul>
              <Skeleton type="images-details" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="product-details__right">
              <h3 className="product-title">
                <Skeleton type="title-details" />
                <Skeleton type="title-details" />
              </h3>
              <p className="product-desc">
                <Skeleton type="desc-details" />
                <Skeleton type="desc-details" />
                <Skeleton type="desc-details" />
                <Skeleton type="desc-details" />
                <Skeleton type="desc-details" />
              </p>
              <p className="product-status">
                <span>Availability:</span>
                <Skeleton />
              </p>
              <p className="product-price">
                <Skeleton />
              </p>
              <div className="product-size">
                <h3 className="product-size__title">
                  Size:
                </h3>
                <ul className="product-size__list">
                  <Skeleton type="size-details" />
                  <Skeleton type="size-details" />
                  <Skeleton type="size-details" />
                  <Skeleton type="size-details" />
                  <Skeleton type="size-details" />
                  <Skeleton type="size-details" />
                </ul>
              </div>
              <div className="product-button">
                <button className="product-button__add">
                  <i className='bx bx-cart' ></i>
                  <span>Add to cart</span>
                </button>
              </div>
              <div className="sale-product">
                <h4 className="sale-product__title">
                  KHUYẾN MÃI KHI MUA HÀNG
                </h4>
                <ul className="sale-list">
                  <li className="sale-list__item">
                    <i class="fas fa-check-circle"></i>
                    <span>Miễn phí ship hàng toàn quốc cho đơn hàng trên 2 triệu.</span>
                  </li>
                  <li className="sale-list__item">
                    <i class="fas fa-check-circle"></i>
                    <span>Miễn phí ship hàng toàn quốc cho đơn hàng trên 2 triệu.</span>
                  </li>
                  <li className="sale-list__item">
                    <i class="fas fa-check-circle"></i>
                    <span>Miễn phí ship hàng toàn quốc cho đơn hàng trên 2 triệu.</span>
                  </li>
                  <li className="sale-list__item">
                    <i class="fas fa-check-circle"></i>
                    <span>Miễn phí ship hàng toàn quốc cho đơn hàng trên 2 triệu.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="product-details__bottom">

          <ul className="product-images__list">
            <li className="product-images__item">
            </li>
            <li className="product-images__item">
            </li>
            <li className="product-images__item">
            </li>
            <li className="product-images__item">
            </li>
          </ul>

        </div>
      </div>
    </div>
  )
}
