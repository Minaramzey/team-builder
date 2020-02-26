import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./Form";
import TeamBuilder from "./Member";
function App() {

  const [member, setMember] = useState([
    {
      name: '',
      email: '',
      role: ''
    }
  ]);

  const addMember = members => {
    const newMember = {
      id: Date.now(),
      name: members.name,
      email: members.email,
      role: members.role
    };
    setMember([...member, newMember]);
  };

  return (
    <div className="App">
<header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>Team Builder App</h1>
        <Form form={addMember} />
        <TeamBuilder members={member} />
      </header>
    </div>
  );
}

export default App;
