import React from 'react'
import Skeleton from './Skeleton'
function SkeletonProductItem() {
  return (
    <div className="skeleton-sale">
      <Skeleton type="images" />
      <Skeleton type="title" />
      <Skeleton type="title" />
      <Skeleton type="rating" />
      <Skeleton type="price" />
    </div>
  )
}
export default SkeletonProductItem
