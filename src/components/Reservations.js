import React from "react";

function Reservations(props) {
  console.log(props.list);
  return (
    <div>
      <span className="group-header">Done</span>
      {props.list}
    </div>
  );
}

export default Reservations;
