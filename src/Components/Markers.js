import React, { Component } from 'react';


export default class Markers extends Component {

  render(){
    return (
        <div>
            <img src="mCrown.png" />
            <br />
            <img src="mMoon.png" />
            <br />
            <img src="mRadioactive.png" />
            <br />
            <img src="mSatellite.png" />
            <br />
            <br />
            <a href="/#/info" ><button className="welcome-btn">Back</button></a>
        </div>
    )
  }
}