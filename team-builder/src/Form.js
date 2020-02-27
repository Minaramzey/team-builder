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
          placeholder='John Smith'
          type='name'
          onChange={handleChanges}
        />
        
        <label htmlFor='email'> Email Address </label>
        <input
          id='email'
          value={members.email}
          name='email'
          type='email'
          placeholder='Example@email.com'
          onChange={handleChanges}
        />
  
        <label htmlFor='role'> Role </label>
        <input
          id='role'
          value={members.role}
          name='role'
          placeholder='Web Developer'
          type='role'
          onChange={handleChanges}
        />
        <button type='submit'> Submit </button>
      </form>
    );
  };
  export default Form;