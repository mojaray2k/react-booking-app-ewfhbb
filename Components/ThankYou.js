import React, { Component } from 'react';
import '../style.css';

class ThankYou extends Component {
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5>Thank you for making an appointment with <b>{this.props.userName}</b> at <b>Amazing Lash</b>.</h5>
              <h5>Can't wait to see you!</h5>
              <br /><br />
              <button
                type="button"
                class="btn btn-primary btn-lg btn-block">
                Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ThankYou;


