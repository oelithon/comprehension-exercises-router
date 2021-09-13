import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Users extends Component {
  render() {
    return (
      <div>
        <Link to="/">Voltar à Home</Link>
        <h2>Users</h2>
        <p> My awesome Users component </p>
      </div>
    );
  }
};

export default Users;
