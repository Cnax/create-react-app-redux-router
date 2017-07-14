import React from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <div>
      <p> this is tech! </p>
      <p><Link to={'/special'} >special</Link></p>
      <p><Link to={'/news'} >news</Link></p>
    </div>
  );
}