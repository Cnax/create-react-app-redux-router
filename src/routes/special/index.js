import React from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <div>
      <p> this is special! </p>
      <p><Link to={'/news'} >news</Link></p>
      <p><Link to={'/tech'} >tech</Link></p>
    </div>
  );
}