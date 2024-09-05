import React, { useState } from 'react'
import './Cadhdrawl.css'
export default function Cashdrawl() {
  const [name, setname] = useState("pradeep");
  const [balance, setbalance] = useState("10000")
  const [trans, settrans] = useState([]);


  const updatebalance = (amount) => {
    const newbal = (balance - amount);
    setbalance(newbal);
    const newtrans = {
      name: name,
      wamount: amount,
      date: new Date().toLocaleDateString(),
      bal: newbal
    }
    settrans([...trans, newtrans])
  }
  return (
    <>
      <div className='container-fluid bg-primary text-center txtcolor p-5'>
        <h1>Bank Withdrawl App</h1>
      </div>
      <div className='container bg-light'>
        <h3 className='text-end m-3'>Welcome {name}</h3>
        <div className='card'>
          <h3 className='card-title p-3'>Withdrawl Balance : <span className='text-secondary'>{balance}</span></h3>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-3 p-3 '>
              <button className='btn btn-primary w-100' onClick={() => updatebalance(50)}>50</button>
            </div>
            <div className='col-3 p-3'>
              {/* <button className='btn btn-secondary w-100' onClick={() => setbalance(balance - 100)}>100</button> */}
              <button className='btn btn-primary w-100' onClick={() => updatebalance(100)}>100</button>

            </div>
            <div className='col-3 p-3'>
              {/* <button className='btn btn-warning w-100' onClick={() => setbalance(balance - 200)}>200</button> */}
              <button className='btn btn-primary w-100' onClick={() => updatebalance(200)}>200</button>

            </div>
            <div className='col-3 p-3'>
              {/* <button className='btn btn-info w-100' onClick={() => setbalance(balance - 500)}>500</button> */}
              <button className='btn btn-primary w-100' onClick={() => updatebalance(500)}>500</button>
              
            </div>
            <button className='btn btn-info w-100' onClick={() => setbalance(10000)}>reset</button>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>S.N0.</th>
              <th>Name</th>
              <th>Withdrawl Amount</th>
              <th>Date & time</th>
              <th>Balance</th>

            </tr>
          </thead>
          <tbody>

            {/* {trans.map( (data, index) => ( */}
{trans.map ((data, index) => (     <tr>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.wamount}</td>
                <td>{data.date}</td>
                <td>{data.bal}</td>
              </tr>))}
         
            {/* )))} */}

            {/* <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>

      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr> */}
          </tbody>
        </table>
      </div>
    </>
  )
}