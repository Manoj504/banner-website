import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [banner, setBanner] = useState({
    description: '',
    timer: 0,
    link: '',
    isVisible: false,
  });

  useEffect(() => {
    const fetchBanner = async () => {
      const response = await axios.get('/api/banner');
      setBanner(response.data);
    };
    fetchBanner();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBanner((prevBanner) => ({
      ...prevBanner,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/banner', banner);
  };

  const toggleVisibility = async () => {
    await axios.put('/api/banner/visibility', { isVisible: !banner.isVisible });
    setBanner((prevBanner) => ({
      ...prevBanner,
      isVisible: !prevBanner.isVisible,
    }));
  };

  return (
    <div className="dashboard">
      <form onSubmit={handleSubmit}>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={banner.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Timer (seconds):
          <input
            type="number"
            name="timer"
            value={banner.timer}
            onChange={handleChange}
          />
        </label>
        <label>
          Link:
          <input
            type="text"
            name="link"
            value={banner.link}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Update Banner</button>
      </form>
      <button onClick={toggleVisibility}>
        {banner.isVisible ? 'Hide Banner' : 'Show Banner'}
      </button>
    </div>
  );
};

export default Dashboard;
