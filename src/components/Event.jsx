import React from "react";

const Event = (props) => {
  return (
      <td className={'Event ' + props.color}>
      <h5>{props.event}</h5>
      <h6>{props.location}</h6>
      <h2>{props.socialmedia}</h2>
      <img src={props.image} alt={props.event}/>
      <button> {props.button} </button>
    </td>
  )
}

export default Event;

