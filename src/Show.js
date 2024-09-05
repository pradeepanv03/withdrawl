import React, { useState } from 'react';
import './Show.css'
export default function Show() {

    const [amount, setAmount] = useState(2000);

    // Function to handle the withdrawal
    const handleWithdraw = (withdrawAmount) => {
        // Assuming you have logic to actually withdraw the amount
        // For now, we'll just subtract it from the state for display purposes
        setAmount(currentAmount => currentAmount - withdrawAmount);
        // setshow(true)
    }
  
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     if (amount !== '') {
    //       setWithdrawals([...withdrawals, parseFloat(amount)]);
    //       setAmount('');
    //     }
    //   };
    return (
        <>
            <div className='box'>
                <div>
                    <div className='name'>
                        <div className='n'><h1 className='nnn'>s</h1>
                        </div><p className='nan'>Sarah Williams</p>
                    </div>
                </div>
                <div className='bal'><p className='balance'>Your Balance</p>
                    <p className='amt'>{amount}
                    <br />
            <span className="currency">In Rupees</span>
            </p>
            </div>
                <h1 className="withdraw">Withdraw</h1>
                <h2 className="choose-sum">CHOOSE SUM (IN RUPEES)
                </h2>
                <div>
                    <div className='btn'>
                        <button className='btns' onClick={() => handleWithdraw(50)}>50</button>
                        <button className='btns' onClick={() => handleWithdraw(100)}>100</button>
                        <button className='btns' onClick={() => handleWithdraw(200)}>200</button>
                        <button className='btns' onClick={() => handleWithdraw(500)}>500</button>
                    </div>
                </div>




                {/* Add more buttons or logic for different withdrawal amounts */}
            </div>
            {/* {withdrawals.length > 0 && (
        <div>
          <h2>Withdrawal List</h2>
          <ul>
            {withdrawals.map((withdrawal) => (
              <li>${withdrawal.toFixed(2)}</li>
            ))}
          </ul>
        </div>
      )} */}
        </>
    )
}
