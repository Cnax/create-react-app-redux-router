import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
// import { connect } from 'react-redux';


import Header from './Header';
import Footer from './Footer';
import Left from './Left';

import './main.less';

export default class Main extends Component {
  render() {
    const headerProps = {
      headerContent: 'this is a demo headerContent',
    };
    const footerProps = {
      footerContent: 'this is a demo footerContent',
    };
    const leftProps = {
      leftContent: 'this is a demo leftContent',
    };
    const { location: { pathname }, children } = this.props;
    console.log('main', this.props)
    if (pathname.includes('login')) {
      return children;
    }
    return (
      <div className="main">
        <Helmet>
          <title>project-demo</title>
        </Helmet>
        <Header {...headerProps}/>
        <Left {...leftProps}/>
        <div className="container">
          {children}
        </div>
        <Footer {...footerProps}/>
      </div>
    );
  } 
}