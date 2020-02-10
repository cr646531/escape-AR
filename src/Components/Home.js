import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';


export default class Home extends Component {

  render(){
    return (
      <div>
        <Header />

        <div className="background">
          <div className="button-grid-container">
            <div className="button-grid-item">
              <Link to='/menu' ><button className="welcome-btn">Continue</button></Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}