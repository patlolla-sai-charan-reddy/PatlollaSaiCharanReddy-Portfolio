import React, { Component } from 'react';
import { render } from 'react-dom';
import $ from 'jquery';


class Details extends Component {
  componentDidMount() {
    document.querySelector('.landing').style.display = 'none';
  }
  render() {
    return (
      <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog inDetails" role="document">
    <div className="modal-content">
      <div className="modal-header modalHeader">

      </div>
      <div className="modal-body">
       
      </div>
    </div>
  </div>
</div>
    )
  }
}

export default Details;