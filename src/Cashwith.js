
import React, { useState } from 'react';
import './Show.css'

export default function Cashwith() {
    const [withdrawals, setWithdrawals] = useState([]);
    const [balance, setBalance] = useState(2000); // Initial balance

    const handleWithdraw = (amount) => {
        if (amount > 0 && amount <= balance) {
            setWithdrawals([...withdrawals, amount]);
            setBalance(balance - amount);
        }
    };
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
                    <p className='amt'>{balance}
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
            {withdrawals.length > 0 && (
                <div>
                    <h2>Withdrawal List</h2>
                    <ul>
                        {withdrawals.map((withdrawal, index) => (
                            <li key={index}>The withdrawl amount is Rs.{withdrawal.toFixed(2)}</li>
                        ))}
                    </ul>
                </div>
            )}
            {/* <div>
      <h1>Withdraw Amount</h1>
      <div>
        <button onClick={() => handleWithdraw(50)}>Withdraw $50</button>
        <button onClick={() => handleWithdraw(100)}>Withdraw $100</button>
        <button onClick={() => handleWithdraw(200)}>Withdraw $200</button>
        <button onClick={() => handleWithdraw(500)}>Withdraw $200</button>

      </div>
      <h2>Total Balance: ${balance.toFixed(2)}</h2>
      {withdrawals.length > 0 && (
        <div>
          <h2>Withdrawal List</h2>
          <ul>
            {withdrawals.map((withdrawal, index) => (
              <li key={index}>${withdrawal.toFixed(2)}</li>
            ))}
          </ul>
        </div>
      )}
    </div> */}
        </>
    );
};
