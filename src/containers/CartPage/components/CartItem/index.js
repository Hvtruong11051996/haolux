import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { actionRemoveCart, actionUpdateCart } from '../../../../actions/cartAction';
import ConvertVnd from '../../../../utils/convertVnd';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function CartItem({ product }) {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(product.qty)
  const [disable, setDisable] = useState(false)
  const increase = () => {
    setDisable(true)
    const action = actionUpdateCart(product.qty + 1, product.size, product.slug)
    dispatch(action)
      .then(() => {
        setQuantity(product.qty + 1)
        setDisable(false)
      })
      .catch((err) => {
        setDisable(false)
      })
  }
  const decrease = () => {
    if (product.qty > 1) {
      setDisable(true)
      const action = actionUpdateCart(product.qty - 1, product.size, product.slug)
      dispatch(action)
        .then(() => {
          setQuantity(product.qty - 1)
          setDisable(false)
        })
        .catch((err) => {
          setDisable(false)
        })
    }
    else {
      toast.error("Không thể giảm số lượng", {
        position: toast.POSITION.TOP_RIGHT
      })
    }
  }
  const onRemoveCart = () => {
    const action = actionRemoveCart(product._id)
    dispatch(action)
      .then(() => {
        toast.success("Xóa sản phẩm thành công", {
          position: toast.POSITION.TOP_RIGHT
        })
      })
  }
  return (
    <div className="cart-item">
      <div className="row">
        <div className="col-xl-3 col-lg-3  col-md-3 col-sm-8 ">
          <div className="cart-item__img">
            <img src={product.productImage.img} alt="" />
          </div>
        </div>
        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <Link to="/" className="cart-item__name">
                {product.title}
              </Link>
              <p className="cart-item__size">
                Sale : {product.sale} %
              </p>
              <p className="cart-item__size">
                Size : {product.size}
              </p>
            </div>
            <div className="col-xl-6 col-lg-6 col-sm-6">
              <div className={
                disable ? "cart-item__quantity disable" :
                  "cart-item__quantity"
              }>
                <button
                  onClick={() => decrease()}
                > -
                </button>
                <span>{product.qty}</span>
                <button
                  onClick={() => increase()}
                > +
                </button>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-xl-6 col-lg-6 col-sm-6">
              <div className="cart-item__remove" onClick={() => onRemoveCart()}>
                <i className="fas fa-trash-alt"></i>
                <span>Xóa</span>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-sm-6">
              <div className="cart-item__price">
                <span>{ConvertVnd(product.price)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
