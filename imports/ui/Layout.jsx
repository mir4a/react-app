import React, { Component } from 'react';

import Header from '/imports/ui/Header.jsx'
import Footer from '/imports/ui/Footer.jsx'

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}
