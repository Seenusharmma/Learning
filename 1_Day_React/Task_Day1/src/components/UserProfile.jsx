import React from 'react';

function UserProfile({ name, role }) {
  return (
    <div>
        <h1>Task 1 Props</h1>
      <h2>Name : {name}</h2>
      <h3>Role : {role}</h3>

      <h6>Finally completed</h6>
    </div>
  );
}

export default UserProfile;
