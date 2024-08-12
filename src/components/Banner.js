import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Banner = () => {
  const [banner, setBanner] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const fetchBanner = async () => {
      const response = await axios.get('/api/banner');
      setBanner(response.data);
      setTimeLeft(response.data.timer);
    };
    fetchBanner();
  }, []);

  useEffect(() => {
    if (!timeLeft) return;
    const interval = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  if (!banner.isVisible || timeLeft <= 0) return null;

  return (
    <div className="banner">
      <p>{banner.description}</p>
      <p>Time left: {timeLeft} seconds</p>
      <a href={banner.link}>Click here</a>
    </div>
  );
};

export default Banner;
