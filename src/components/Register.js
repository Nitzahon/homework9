import React from "react";

export default function Register() {
  return (
      
    <div className="reactReg">     
        <div className="row">
          <div className="col-3"></div>

          <input
            name="input1"
            type="text"
            placeholder="test1"
            className="col-3"
          />

          <input
            name="input2"
            type="text"
            placeholder="test2"
            className="col-3"
          />

          <div className="col-3"></div>
        </div>
        <div className="row">
          <div className="col-4"></div>
          <button className="col-4 btn btn-success">Register</button>
          <div className="col-4"></div>
        </div>
    </div>
  );
}
