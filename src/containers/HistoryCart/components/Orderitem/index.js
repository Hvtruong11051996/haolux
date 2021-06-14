import React from 'react'
import HistoryItem from '../HistoryItem';
import {
  EditOutlined,
  LoadingOutlined,
  CloseOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import { actionGetOrders, actionRemoveOrder } from '../../../../actions/OrderAction';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
const OrderItem = ({ order }) => {
  const dispatch = useDispatch()
  const removeOrder = (id) => {
    const action = actionRemoveOrder(id)
    dispatch(action)
      .then(() => {
        toast.success("Bạn đã hủy đơn hàng thành công", {
          position: toast.POSITION.TOP_RIGHT
        })
        const action = actionGetOrders()
        dispatch(action)
      })
      .catch(() => {
        toast.error("Bạn đã hủy đơn hàng thất bại", {
          position: toast.POSITION.TOP_RIGHT
        })
      })
  }
  return (
    <div className="order">
      {
        order && order.items.map((order, index) => {
          return (
            <HistoryItem
              product={order}
              key={index}
            />
          )
        })
      }
      <Button
        type="primary"
        className="btn-cancel-order-call btn-cancel-order-call--delete"
        onClick={() => removeOrder(order._id)}
      >
        <CloseOutlined /> Hủy đơn hàng
      </Button>
      <Button
        type="primary"
        className="btn-cancel-order-call btn-cancel-order-call--status"
      >
        <LoadingOutlined /> Trạng thái :Chờ xét duyệt
      </Button>
      <Button
        onClick={() => toast.warning("Chức năng chưa được hỗ trợ", {
          position: toast.POSITION.TOP_RIGHT
        })}
        type="primary"
        className="btn-cancel-order-call btn-cancel-order-call--edit"
      >
        <EditOutlined />  Chỉnh sửa
      </Button>
    </div>
  )
}

export default OrderItem
