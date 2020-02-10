import React, { Fragment, Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { exchangeTokenForAuth, getTeams } from '../store';

import Info from './Info';
import Clock from './Clock';
import Lock from './Lock';
import Envelope from './Envelope';
import Letter from './Letter';
import Debug from './Debug';
import Escaped from './Escaped';
import Menu from './Menu';
import Play from './Play';
import Markers from './Markers';
import Home from './Home';
import Interface from './Interface';

class App extends Component {
  componentDidMount() {
    this.props.init();
  }

  render() {

    return (
      <Router>
        <Fragment>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={Menu} />
          <Route path="/info" component={Info} />
          <Route path="/debug" component={Debug} />
          <Route path="/interface" component={Interface} />
          <Route path="/markers" component={Markers} />
          <Route exact path="/room/clock" component={Clock} />
          <Route exact path="/room/lock" component={Lock} />
          <Route exact path="/room/envelope" component={Envelope} />
          <Route exact path="/room/letter" component={Letter} />
          <Route exact path="/escaped" component={Escaped} />
          <Route exact path="/play" component={Play} />
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  init: () => {
    dispatch(exchangeTokenForAuth());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
