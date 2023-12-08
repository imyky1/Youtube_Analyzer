import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Loader from './Loader';
const CallbackForm = ({ handleClose }) => {
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0); // Track progress from 0 to 100
  const [Nameerror, setNameError] = useState(false);
  const [Contacterror, setContactError] = useState(false);
  const handleSubmit = async(e) => {
    
    e.preventDefault();
    if(name == ''){
     return setNameError(true)
    }
    if( contactNumber == ''){
     return setContactError(true)
    }
    try {
      setError(false)
      setLoading(true);
      const response = await axios.post(`${import.meta.env.VITE_API_URL}requestCallback`, {
        name,
        contactNumber,
      });

      // console.log(response.data); 
      setSubmitted(true);
      setLoading(false);
    } catch (error) {
      console.error('Error submitting callback request:', error.message);
    }
  };
  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + 10; // Increment by 10 (adjust as needed)
          return newProgress >= 100 ? 100 : newProgress; // Cap progress at 100
        });
      }, 1000); // Change the interval time (milliseconds) as needed

      return () => clearInterval(interval);
    }
  }, [loading]);

  if (submitted) {
    return (
      <div className='popup'>
        <div className='popupContent'>
          <img src="/check.svg" alt="" />
          <h3>Request a call back</h3>
          <h6>Our Team will call you shortly in 12-24 hrs</h6>
          <h6>Can’t you wait for call?</h6>
          <button onClick={handleClose}>Close</button>
          <a href="/"><button onClick={handleClose}>check another video →</button></a>
        </div>
      </div>
    );
  }

  return (
    <div className='popup'>
      <div className='popupContent'>
        <h3>Request a Call back</h3>
        <form className='popupForm' onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
              setNameError(false)}}
            placeholder="Name"
          />
          {Nameerror && <p style={{ color: 'red',margin:'0 0 10px 0',display:'flex',fontWeight:'100',fontSize:'12px'  }}>× Please Enter Name</p>}
          <input
            type="text"
            value={contactNumber}
            onChange={(e) => {setContactNumber(e.target.value)
              setContactError(false)}}
            placeholder="Contact Number"
          />
          {Contacterror && <p style={{ color: 'red',margin:'0 0 10px 0',display:'flex',fontWeight:'100' ,fontSize:'12px'  }}>× Please enter Contact Number</p>}
          <button type="submit">Request a call Back</button>
          <button onClick={handleClose}>Close</button>
        </form>
      </div>
      {loading && <Loader percentage={progress} />}
    </div>
  );
};



export default CallbackForm;
