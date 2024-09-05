import React, {useState} from 'react';
function City() {

const [credit, setCredit] = useState(0);
const [withdraw, setWithdraw] = useState(0);

const handleCredit = (amount) => {
  setCredit(credit + amount);
  // Assuming you want to withdraw the same amount
  setWithdraw(withdraw + amount);
        setshow(true)

};
    const [show, setshow] = useState(false);

  return (
    <div>
    <h2>Credit: {credit}</h2>
    <h2>Withdraw: {withdraw}</h2>
    <button onClick={() => handleCredit(100)}>Credit $100</button>
    <div>
{
  show ? <>
    <h1> Show Data</h1>
    <p>Name : {withdraw} </p>
  </> : null
}
</div>
  </div>
  );
};

export default City;