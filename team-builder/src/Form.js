import React, { useState } from 'react';

const Form = props => {
    const [members, setMembers] = useState({ name: '', email: '', role: '' });
  
    const handleChanges = e => {
      setMembers({ ...members, [e.target.name]: e.target.value });
    };
  
    const submitHandle = e => {
      e.preventDefault();
      props.form(members);
      setMembers({ name: '', email: '', role: '' });
    };
  
    return (
      <form onSubmit={submitHandle}>
        <label htmlFor='name'>Name </label>
        <input
          id='name'
          value={members.name}
          name='name'
          placeholder='name'
          type='name'
          onChange={handleChanges}
        />
        <button type='submit'> Add </button>
        <label htmlFor='email'> Email Address </label>
        <input
          id='email'
          value={members.email}
          name='email'
          type='email'
          placeholder='example@email.com'
          onChange={handleChanges}
        />
  
        <label htmlFor='role'> Role </label>
        <input
          id='role'
          value={members.role}
          name='role'
          placeholder='Role'
          type='role'
          onChange={handleChanges}
        />
      </form>
    );
  };
  export default Form;