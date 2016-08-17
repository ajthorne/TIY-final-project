import React from 'react';
import {Link} from 'react-router';

const SingleUser = React.createClass({
  render: function () {
    return (
      <li>
        <img src={`${this.props.userImg}`}/>
        <Link to={`/users/${this.props.id}`}><p>{this.props.name}</p></Link>
      </li>
    )
  }
})

export default SingleUser;