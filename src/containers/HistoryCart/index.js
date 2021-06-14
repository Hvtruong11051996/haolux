import React, { useEffect, useState } from 'react'
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import { useDispatch, useSelector } from 'react-redux'
import { actionGetOrders } from '../../actions/OrderAction'
import './HistoryCart.scss'
import OrderItem from './components/Orderitem';
import Loading from './components/Loading';
import Empty from '../../components/Empty';
const { TabPane } = Tabs;
const HistoryCart = () => {
  const orders = useSelector(state => state.order.orders)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    const action = actionGetOrders()
    setLoading(true)
    dispatch(action)
      .then((res) => {
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [])
  return (
    <div className="history">
      <div className="container">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Tất Cả"
            key="1">
            {orders.length ? orders.map((order, index) => {
              return (
                <OrderItem
                  key={index}
                  order={order}
                />
              )
            })
              : null
            }
            {
              loading ? <Loading /> : null
            }
            {
              !loading && !orders.length && (
                <Empty title="Không có đơn hàng nào" />
              )
            }
          </TabPane>
          <TabPane tab="Chờ Duyệt"
            key="2">
            {orders ? orders.map((order, index) => {
              return (
                <OrderItem
                  key={index}
                  order={order}
                />
              )
            })
              : null
            }
            {
              loading ? <Loading /> : null
            }
            {
              !loading && !orders.length && (
                <Empty title="Không có đơn hàng nào" />
              )
            }
          </TabPane>
          <TabPane tab="Đã Xét Duyệt"
            key="3" >
            <Empty title="Không có đơn hàng nào" />
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
}

export default HistoryCart
