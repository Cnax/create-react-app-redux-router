import React from 'react';
import { Link } from 'react-router';
import { Button } from 'antd';

export default () => {
  return (
    <div>
      <p> Welcome! </p>
      <Button type="primary">Button</Button>
      <p><Link to={'/special'} >special</Link></p>
      <p><Link to={'/news'} >news</Link></p>
      <p><Link to={'/tech'} >tech</Link></p>
    </div>
  );
}