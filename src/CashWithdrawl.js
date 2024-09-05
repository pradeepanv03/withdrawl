// Write your code here
// import {Component} from 'react'
import DenominationItem from './DenominationItem'
import './CashWithdrawl.css'

// class CashWithdrawal extends Component {
//   state = {
//     balance: 2000,
//   }

//   updateBalance = value => {
//     this.setState(prevState => ({balance: prevState.balance - value}))
//   }

//   render() {
//     const {denominationsList} = this.props
//     const {balance} = this.state
//     const name = 'Sarah Williams'
//     const initial = name.slice(0, 1)

//     return (
//       <div className="app-container">
//         <div className="cash-withdrawal-container">
//           <div className="user-details-container">
//             <div className="initial-container">
//               <p className="initial">{initial}</p>
//             </div>
//             <p className="name">{name}</p>
//           </div>
//           <div className="balance-container">
//             <p className="your-balance">Your Balance</p>
//             <p className="balance">
//               {balance}
//               <br />
//               <span className="currency">In Rupees</span>
//             </p>
//           </div>
//           <p className="withdraw">Withdraw</p>
//           <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
//           <ul className="denominations-list">
//             {denominationsList.map(eachDenomination => (
//               <DenominationItem
//                 key={eachDenomination.id}
//                 denominationDetails={eachDenomination}
//                 updateBalance={this.updateBalance}
//               />
//             ))}
//           </ul>
//         </div>
//       </div>
//     )
//   }
// }


// export default CashWithdrawal


import React, { useState } from 'react';

export default function CashWithdrawal({ denominationsList }) {
  const [balance, setBalance] = useState(2000);

  const updateBalance = value => {
    setBalance(prevBalance => prevBalance - value);
  };

  const name = 'Sarah Williams';
  const initial = name.slice(0, 1);

  return (
    <>
    <div className="app-container">
      <div className="cash-withdrawal-container">
        <div className="user-details-container">
          <div className="initial-container">
            <p className="initial">{initial}</p>
          </div>
          <p className="name">{name}</p>
        </div>
        <div className="balance-container">
          <p className="your-balance">Your Balance</p>
          <p className="balance">
            {balance}
            <br />
            <span className="currency">In Rupees</span>
          </p>
        </div>
        <p className="withdraw">Withdraw</p>
        <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
        <ul className="denominations-list">
          {denominationsList.map(eachDenomination => (
            <DenominationItem
              key={eachDenomination.id}
              denominationDetails={eachDenomination}
              updateBalance={updateBalance} // Pass updateBalance as a prop
            />
          ))}
        </ul>
      </div>
    </div>
{/* <div>
{
  show ? <>
    <h1> Show Data</h1>
    <p>Name : {value} </p>
  </> : null
}
</div> */}
</>
  )
}