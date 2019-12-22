import React, { Component } from 'react'

export default class AddPost extends Component {
    
    render() {

        return (
            <div>
<div className="reactReg">     
        <div className="row">
          <div className="col-md-8 col-lg-3"></div>

          <input
            name="input1"
            type="text"
            placeholder="title"
            className="col-md-8 col-lg-3"
          />

          <input
            name="input2"
            type="text"
            placeholder="info"
            className="col-md-8 col-lg-3"
          />

          <div className="col-md-8 col-lg-3"></div>
        </div>
        <div className="row">
          <div className="col-md-8 col-lg-4"></div>
          <button className="col-md-8 col-lg-4 btn btn-success">Submit</button>
          <div className="col-md-8 col-lg-4"></div>
        </div>
    </div>
            </div>
        )
    }
}
