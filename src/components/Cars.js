import React from "react";

function Car(props) {
  console.log(props);
  return (
    <div>
      Car : {props.car} ,Company : {props.brand}
    </div>
  );
}

export default Car;
