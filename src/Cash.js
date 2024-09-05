


// import React, { useState } from 'react';

// const Cash = () => {
//   const [amount, setAmount] = useState('');
//   const [withdrawnAmount, setWithdrawnAmount] = useState(null);

//   const handleChange = (event) => {
//     setAmount(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setWithdrawnAmount(amount);
//   };

//   return (
//     <div>
//       <h1>Withdraw Amount</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Amount:
//           <input type="number" value={amount} onChange={handleChange} />
//         </label>
//         <button type="submit">Withdraw</button>
//       </form>
//       {withdrawnAmount !== null && (
//         <ul>
//             <li>        <p>You have withdrawn: ${withdrawnAmount}</p>
//             </li>
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Cash;


import React, { useState } from 'react';

const Withdrawal = () => {
  const [amount, setAmount] = useState('');
  const [withdrawals, setWithdrawals] = useState([]);

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (amount !== '') {
      setWithdrawals([...withdrawals, parseFloat(amount)]);
      setAmount('');
    }
  };

  return (
    <div>
      <h1>Withdraw Amount</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={handleChange}
            step="0.01"
          />
        </label>
        <button type="submit">Withdraw</button>
      </form>
      {withdrawals.length > 0 && (
        <div>
          <h2>Withdrawal List</h2>
          <ul>
            {withdrawals.map((withdrawal) => (
              <li>${withdrawal.toFixed(2)}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Withdrawal;
