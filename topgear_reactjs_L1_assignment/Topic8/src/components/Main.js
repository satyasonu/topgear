import React from 'react'
import PropTypes from 'prop-types'


const Main = (props) => {
  return (
    <div>
      <h1>I am the Main Component!</h1>
      <p>Name:- {props.name}</p>
      <p>Prefered Cities:- {props.cities}</p>
      <p>Age : {props.age >= 18 && props.age <= 60 ? props.age : Error}</p>
    </div>
  )
}

Main.propTypes  = {
  name : PropTypes.string.isRequired,
  cities : PropTypes.array,
  age : PropTypes.number
}

Main.defaultProps = {
  name : "ABC XYZ",
  cities : ["BHUBANESWAR",", ", "BANGALORE",", ", "HYDERABAD"],
  age : 18
}

export default Main;