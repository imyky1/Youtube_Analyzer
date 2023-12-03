import React from 'react';

const VideoForm = ({ onSubmit, value, onChange }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Basic validation - check if value (videoLink) is not empty
    if (value.trim() !== '') {
      onSubmit();
    } else {
      // You can handle validation errors or display a message to the user
      alert('Please enter a valid YouTube video link');
    }
  };

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Discover Your Earning Potential</h1>
      <h3 style={{ fontWeight: 300 }}>Turn your Youtube expertise into a lucrative income through resource sharing</h3>
      <form style={{ display: 'flex' }} className="videoForm" onSubmit={handleSubmit}>
        <div className="videoFormInput">
          <img src="/youtube.svg" alt="" />
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Enter Youtube video link"
        />
        </div>
        <button type="submit">Analyze Video</button>
      </form>
    </div>
  );
};

export default VideoForm;
