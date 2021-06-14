import React from 'react'
import './LoadingButton.scss'
function LoadingButton() {
  return (
    <div className="loading-button">
      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default LoadingButton
