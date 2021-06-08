import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui grid fixed menu ">
      <div className="ui container center ">
        <div className="two wide column left floated">
          {' '}
          <h2>Dhaka Shop</h2>{' '}
        </div>
        <div className="five wide column right floated">
          <button class="ui secondary button">Sign Up</button>
          <button class="ui button">Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
