import React, { Component } from 'react';
import Header from './global/header'
import Footer from './global/footer'

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <div className="app-content">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}
