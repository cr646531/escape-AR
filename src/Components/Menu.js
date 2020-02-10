import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import Sound from 'react-sound';

import Header from './Header';


export default class Menu extends Component {

  constructor(){
    super();
    this.state = {
      rain: true
    };
    this.stopRain = this.stopRain.bind(this);
    this.startRain = this.startRain.bind(this);
  }

  stopRain(){ this.setState({ rain: false }) };
  startRain() { this.setState({ rain: true }) };

  render(){
    return (
      <div>
        <div className="background">

          <Header />

          <div className="button-grid-container">

            <div className="button-grid-item">
              <Link to='/play' ><button className="welcome-btn">Play</button></Link>
            </div>

            <div className="button-grid-item">
              <Link to='/info' ><button className="welcome-btn">Instructions</button></Link>
            </div>

            {this.state.rain && (
              <div className="button-grid-item">
                <button className="welcome-btn" onClick={this.stopRain}>Mute</button>
              </div>
            )}

            { this.state.rain && <Sound url={'rain.mp3'} playStatus={Sound.status.PLAYING} onFinishedPlaying={this.stopRain} /> }
            { !this.state.rain && (
              <div className="button-grid-item">
                <button className="welcome-btn" onClick={this.startRain}>Unmute</button>
              </div>
            )}

            </div>
        </div>
  </div>
  )
    }
}