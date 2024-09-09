import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import settingImage from '../assets/agentsetting-image.jpeg';
import './AgentManagement.css';

const AgentManagement = () => {
  const [showCard, setShowCard] = useState(false);
  const [role, setRole] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [agents, setAgents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddAgent = () => {
    if (name && email && role) {
      setAgents([...agents, { role, name, email }]);
      setRole('');
      setName('');
      setEmail('');
      setShowCard(false);
    }
  };

  const filteredAgents = agents.filter((agent) =>
    agent.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='main-class'>
      <div className='center-div'>
        <div className='agent-classs'>
          <img src={settingImage} alt="Agent Setting" />
          <h1>Agent Management</h1>
          <div className='addagent'>
            <button onClick={() => setShowCard(true)}>Add New Agent</button>
          </div>
        </div>
      </div>

      {showCard && (
        <div className='agent-form-card'>
          <h1>Add Agent</h1>
          <TextField
            select
            label="Select Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            variant="outlined"
            fullWidth
          >
            <MenuItem value="Sub Agent">Sub Agent</MenuItem>
            <MenuItem value="Employee">Employee</MenuItem>
          </TextField>
          <TextField
            label="Name"
            fullWidth
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Email"
            fullWidth
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleAddAgent}>Submit</button>
        </div>
      )}

      <div className='table-agent-class'>
        <input
          type="Search"
          placeholder='Search by Name'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className='table'>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Agent Type</th>
                <th>Active</th>
                <th>Flight Pricing</th>
                <th>Action</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {filteredAgents.map((agent, index) => (
                <tr key={index}>
                  <td>{agent.name}</td>
                  <td>{agent.email}</td>
                  <td>{agent.role}</td>
                  <td>Active</td>
                  <td>
                    <button>Manage Pricing</button>
                  </td>
                  <td>
                    <button>Update Permissions</button>
                  </td>
                  <td>
                    <button onClick={() => setAgents(agents.filter((_, i) => i !== index))}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AgentManagement;
