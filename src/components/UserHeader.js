import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
  render () {
    const { user } = this.props;
    
    if(!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  };
}

const mapStateToProps = (state, ownerProps) => {
  return { user: state.users.find(user => user.id === ownerProps.userId) }
}

export default connect(mapStateToProps) (UserHeader);