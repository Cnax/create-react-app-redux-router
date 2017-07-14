import React from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <div>
      <p> this is news! </p>
      <p><Link to={'/special'} >special</Link></p>
      <p><Link to={'/tech'} >tech</Link></p>
    </div>
  );
}