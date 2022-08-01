import React from 'react'

const Main = (props) => {
  return (
    <div>
      <h1>I am the Main Component!</h1>
      <p>Comapny Name:- {props.companyName}</p>
      <p>Comapny Location:- {props.comapnyLocation}</p>
    </div>
  )
}

Main.defaultProps = {
  companyName : "WIPRO",
  comapnyLocation : "BANGALORE"
}

export default Main;