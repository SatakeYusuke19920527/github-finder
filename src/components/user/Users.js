import React from 'react';
import UserItem from './UserItem';

const Users = props => {
    const { loading, users } = props;
    
    return (
        <div style={userStyle}>
            {loading ? <h1>Loading...</h1> : users.map((user) => <UserItem key={user.id} user={user} />)}
        </div>
    );
}

const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1rem'
};

export default Users;
