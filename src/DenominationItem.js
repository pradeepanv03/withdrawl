import './DenominationItem.css'
import { useState } from 'react'
const DenominationItem = props => {
    const {denominationDetails, updateBalance} = props
    const {value} = denominationDetails
  
    const onClickDenomination = () => {
      updateBalance(value)
      setshow(true)
    }
    const [show, setshow] = useState(false);
   
    return (
      <>
      <li className="denomination-item">
        <button
          type="button"
          className="denomination-button"
          onClick={onClickDenomination }
        >
          {value}
        </button>
      </li>

      <div className='data'>
      {
        show ? <>
          <p>Cash withdraw amount Rs. {value} </p>
        </> : null
      }
      </div>
      </>
    )
  }
  export default DenominationItem;
