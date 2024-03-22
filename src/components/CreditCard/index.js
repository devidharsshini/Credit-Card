// Write your code here
import {useState} from 'react'

import './app.css'

const CreditCard = () => {
  const [defNumber, updateNumber] = useState('')
  const [defName, updateName] = useState('')

  const onTyping = event => {
    updateNumber(event.target.value)
  }
  const onTexting = event => {
    updateName(event.target.value)
  }

  return (
    <div className="container">
      <div className="user-side">
        <h1 className="heading">Payment Method</h1>

        <div className="user-box">
          <input
            type="text"
            className="number"
            onChange={onTyping}
            placeholder="Card Number"
          />
          <input
            type="text"
            className="name"
            onChange={onTexting}
            placeholder="Cardholder Name"
          />
        </div>
      </div>

      <div className="credit">
        <h1 className="creditcard-txt">CREDIT CARD</h1>
        <div className="display-credit">
          <img
            src="https://assets.ccbp.in/frontend/hooks/credit-card-bg.png"
            alt="backgroun-img"
          />
        </div>

        <div className="display">
          <p className="txt3">CARDHOLDER NAME</p>
          <p className="display-num">{defNumber}</p>
          <p className="display-name"> {defName}</p>
        </div>
      </div>
    </div>
  )
}
export default CreditCard
