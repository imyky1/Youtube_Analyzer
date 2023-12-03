import React, { useState } from 'react';
import CallbackForm from './CallBackForm';
const Header = () => {
    const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <header style={headerStyle}>
      <div style={logoStyle}>
        <img src="/logo.svg" alt="Logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </div>
      <div style={buttonContainer}>
        <img src="/call.svg" alt="" />
        <button style={buttonStyle} onClick={toggleForm}>Request a call back</button>
        {showForm && (
          <div className="popup">
            <div className="popup-content">
              <CallbackForm handleClose={toggleForm} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
  
const headerStyle = {
  display: 'flex',
  justifyContent:'space-around',
  alignItems: 'center',
  padding: '1rem',
  background: 'black',
  color: '#fff',
};

const logoStyle = {
  flex: '1',
  marginLeft : '50px'
};

const buttonContainer = {
display:'flex',
  padding: '0.5rem 1rem',
  borderRadius: '40px',
  border: '1px solid white',
  textAlign: 'right',
  marginRight : '50px',
  background: 'black',
  cursor: 'pointer',
};

const buttonStyle = {
//   padding: '0.5rem 1rem',
  fontSize: '1rem',
  border:'none',
  outline:'none',
  background: 'black',
  color: 'white',
  cursor: 'pointer',
};

export default Header;
