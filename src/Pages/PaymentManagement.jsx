import React, { useState } from 'react';
import './PaymentManagement.css';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import payment from '../assets/agentsetting-image.jpeg';


const PaymentManagement = () => {
  // State for managing the form visibility and inputs
  const [showCard, setShowCard] = useState(false);
  const [role, setRole] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [cardName, setCardName] = useState('');
  const [month, setMonth] = useState('');
  const [cvvNumber, setCvvNumber] = useState('');
  const [agents, setAgents] = useState([]);

  // Handle form submission
  const handleAddAgent = () => {
    if (cardholderName && cardName && month && cvvNumber && role) {
      // Add new agent to the table
      setAgents([...agents, { role, cardholderName, cardName, month, cvvNumber }]);
      // Clear form and hide card
      setRole('');
      setCardholderName('');
      setCardName('');
      setMonth('');
      setCvvNumber('');
      setShowCard(false);
    }
  };

  // Sample filtered agents (for demonstration)
  const filteredAgents = agents;

  return (
    <div className='main-class'>
      <div className='center-div'>
        <div className='agent-classs'>
          <img src={payment} alt="Agent Setting" />
          <h1>Payment Agent Management</h1>
          <div className='addagent'>
            <button onClick={() => setShowCard(true)}>Add Payment</button>
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
            label="Cardholder Name"
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
            variant="outlined"
            fullWidth
          />

          <TextField
            label="Card Name"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            variant="outlined"
            fullWidth
          />

          <TextField
            label="MM/YY"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            variant="outlined"
            fullWidth
          />

          <TextField
            label="CVV"
            value={cvvNumber}
            onChange={(e) => setCvvNumber(e.target.value)}
            variant="outlined"
            fullWidth
          />

          <button onClick={handleAddAgent}>Submit</button>
        </div>
      )}

      <div className='table-agent-class'>
        <div className='table'>
          <table>
            <thead>
              <tr>
                <th>Role</th>
                <th>Cardholder Name</th>
                <th>Card Name</th>
                <th>MM/YY</th>
                <th>CVV</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAgents.map((agent, index) => (
                <tr key={index}>
                  <td>{agent.role}</td>
                  <td>{agent.cardholderName}</td>
                  <td>{agent.cardName}</td>
                  <td>{agent.month}</td>
                  <td>{agent.cvvNumber}</td>
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

export default PaymentManagement;
